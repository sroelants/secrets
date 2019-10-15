import React, { useState, useEffect, useRef } from 'react';
import './Secrets.scss';
import { Card } from './Card';


export const Secrets: React.FC = () => {
  let initial_secrets: JSX.Element[] = [];

  const [secrets, setSecrets] = useState(initial_secrets);
  const [secretsPage, setSecretsPage] = useState(1);
  const [intersecting, setIntersecting] = useState(false);
  const sentinel = useRef(null);

  const addSecrets = () => {
    const ac = new AbortController();
    const sig = ac.signal;
    const response = fetch('http://localhost:5000/api/secrets/' + secretsPage, { signal: sig });
    response.then((result) => result.json()).then(
      (json) => json.map((secret: any) => (<Card key={Math.random()} secret={secret.secret} date={secret.date_posted} />))
    ).then((cards: any) => {
      setSecrets(secrets.concat(cards));
    });
    setSecretsPage(secretsPage + 1);
    return () => ac.abort();
  }

  // Create and attach observer once on mount.
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.5 });
    let s = sentinel.current
    if (s) observer.observe(s);
    return () => {
      let s = sentinel.current;
      if (s) observer.unobserve(s)
    }
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
