import React, { useState, useEffect } from 'react';
import './Card.scss';

export const Card: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), Math.random() * 400);
  }, []);

  return (
    <div className={visible ? "card card--visible" : "card"}>
      <div className="card__date">8 Oct 2019</div>
      <div className="card__secret">This is a deep secret. It is rather
        long. It has been tormenting me for years and I cannot begin
        to express how relieved I feel to finally get it off my chest.</div>
    </div>
  );
}
