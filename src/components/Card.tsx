import React, {useState } from "react";
import "./Card.scss";

export interface ICard {
  secretId: number;
  secret: string;
  date: string;
  likes: number;
}

export const Card: React.FC<ICard> = ({ secretId, secret, date, likes }) => {
  // Check if secret is already liked (in localStorage)
  const storedLike = localStorage.getItem(secretId.toString());
  let alreadyLiked: boolean;
  if (storedLike === null) {
    alreadyLiked = false;
  } else {
    alreadyLiked = true;
  }

  const [liked, setLiked] = useState(alreadyLiked);
  const [localLikes, setLocalLikes] = useState(likes);
  const dateObject = new Date(date);
  const shortDate = dateObject
    .toString()
    .split(" ")
    .slice(1, 4)
    .join(" ");

  const handleLike = () => {
    // Send put request to server.
    const update = {
      date_posted: date,
      likes: !liked ? likes + 1 : likes - 1,
      secret,
    };

    fetch("https://secrets-backend.herokuapp.com/api/secret/" + secretId, {
      body: JSON.stringify(update),
      headers: new Headers({ "Content-Type": "application/json" }),
      method: "PUT",
    });

    // Set current secret's like status in localStorage
    if (liked) {
      localStorage.removeItem(secretId.toString());
    } else {
      localStorage.setItem(secretId.toString(), "liked");
    }

    setLocalLikes(localLikes + (!liked ? 1 : -1)); // Update shown like count.
    setLiked(!liked); // Update shown like status
  };

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__date">{shortDate}</div>
        <div className="card__likes">
          {localLikes}
          <img alt="like"
            className={liked ? "card__like liked" : "card__like"}
            src="/assets/img/like.svg"
            onClick={handleLike}
          />
        </div>
      </div>
      <div className="card__secret">{secret}</div>
    </div>
  );
};
