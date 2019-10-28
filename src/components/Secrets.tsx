import React, { useState, useEffect, useRef } from 'react';
import './Secrets.scss';
import { Card } from './Card';

export const Secrets: React.FC = () => {
  const [secrets, setSecrets] = useState([] as JSX.Element[]);
  const [secretsPage, setSecretsPage] = useState(0);
  const [intersecting, setIntersecting] = useState(false);
  const sentinel = useRef(null);

  const addSecrets = () => {
    const ac = new AbortController();
    const sig = ac.signal;
    const response = fetch("https://secrets-backend.herokuapp.com/api/secrets/" + secretsPage, { signal: sig });
    response
      .then((result) => result.json())
      .then((json) => json.map(
        (secret: any) => (<Card key={secret.id}
          secretId={secret.id}
          secret={secret.secret}
          date={secret.date_posted}
          likes={secret.likes} />)))
      .then((cards: any) => { setSecrets(secrets.concat(cards)); })
      .catch(() => {});

    setSecretsPage(secretsPage + 1);
    return () => ac.abort();
  };

  // Create and attach observer once on mount.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: [0, 0.25, 0.75, 1] });
    const s = sentinel.current;
    if (s) {
      observer.observe(s);
    }
    return () => {
      // let s = sentinel.current;
      if (s) {
        observer.unobserve(s);
      }
    };
  }, []);

  useEffect(addSecrets, [intersecting]);

  return (
    <>
      <div className="secrets">
        {secrets}
      </div >
      <div ref={sentinel} className="sentinel"></div>
    </>
  );
}
