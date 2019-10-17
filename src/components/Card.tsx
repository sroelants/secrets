import React, { useState, useEffect } from 'react';
import './Card.scss';


export interface ICard {
  secret: string
  date: string
}


export const Card: React.FC<ICard> = ({ secret, date }) => {
  const [visible, setVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  console.log(date)
  const dateObject = new Date(date);
  const shortDate = dateObject.toString().split(" ").slice(1, 4).join(' ');
  console.log(shortDate);

  useEffect(() => {
    setTimeout(() => setVisible(true), Math.random() * 400);
  }, []);

  return (
    <div className={visible ? "card card--visible" : "card"}>
      <div className="card__header">
        <div className="card__date">{shortDate}</div>
        <div className="card__likes">
          100
        <img className={liked ? "card__like liked" : "card__like"}
            src="/assets/img/like.svg"
            onClick={() => setLiked(!liked)} />
        </div>
      </div>
      <div className="card__secret">{secret}</div>
    </div>
  );
}
