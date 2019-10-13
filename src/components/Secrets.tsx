import React, { useState, useEffect, useRef } from 'react';
import './Secrets.scss';
import { Card } from './Card';


export const Secrets: React.FC = () => {
  const [secrets, setSecrets] = useState(
    [<Card key={Math.random()} />,
    <Card key={Math.random()} />,
    <Card key={Math.random()} />,
    <Card key={Math.random()} />,
    <Card key={Math.random()} />,
    <Card key={Math.random()} />,
    ]
  );
  const [intersecting, setIntersecting] = useState(false);
  const sentinel = useRef(null);

  const fetchSecrets = () => {
    setSecrets(secrets.concat([
      <Card key={Math.random()} />,
      <Card key={Math.random()} />,
      <Card key={Math.random()} />,
      <Card key={Math.random()} />,
      <Card key={Math.random()} />,
      <Card key={Math.random()} />,
    ]));
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

  useEffect(fetchSecrets, [intersecting]);

  return (
    <>
      <div className="secrets">
        {secrets}
      </div >
      <div ref={sentinel} className="sentinel"></div>
    </>
  );
}
