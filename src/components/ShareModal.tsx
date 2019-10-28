import "./Modal.scss";
import "./ShareModal.scss";
import React, { useState, useEffect } from "react";
import { ModalType } from "./App";

export interface IModal {
  visible: boolean;
  closeHandler: (t: ModalType | null) => void;
}

export const ShareModal: React.FC<IModal> = ({ visible, closeHandler }) => {
  const [secret, setSecret] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // When turned visible (visible changes and is set to true)
  // reset submitted to false.
  useEffect(() => { if (visible) { setSubmitted(false); } }, [visible]);

  const handleChange = (e: any) => {
    setSecret(e.target.value);
  };

  const handleSubmit = (e: any) => {
    const content = e.target.querySelector(".shareform__textarea").value;
    const body = {
      date_posted: (new Date(Date.now())).toISOString(),
      likes: 0,
      secret: content,
    };

    fetch("https://secrets-backend.herokuapp.com/api/secrets", {
      body: JSON.stringify(body),
      headers: (new Headers({ "Content-Type": "application/json" })),
      method: "POST",
    });

    setSubmitted(true);
    e.preventDefault();
  };

  return (
    <>
      <div className={visible ? "share-modal modal visible" : "share-modal modal"} >
        <button className="modal__close" onClick={() => {
          closeHandler(null);
          setSecret("");
        }}>
<img aria-label="close"
          src="assets/img/close.svg"
          width="25px"
          alt="close" />
        </button>
        {(!submitted)
          ? (
            <>
              <div className="modal__title">Share a secret</div>
              <div className="modal__content">
                <form onSubmit={handleSubmit} className="shareform">
                  <textarea onChange={handleChange}
                    value={secret}
                    className="shareform__textarea"
                    placeholder="Share your secret." />
                  <div>
                    <button
                      type="button"
                      className="shareform__button shareform__clear"
                      onClick={() => setSecret("")}> Clear </button>
                    <input type="submit"
                      value="Share"
                      className="shareform__button shareform__submit" />
                  </div>
                </form>
              </div>
            </>)
          : (
            <div className="shareform__success">
              <img src="/assets/img/icon--checkmark.svg"
                   width="50px"
                   className="shareform__success-icon"
                   alt="Submitted" />
                Thank you for sharing your secret!
                 It should appear on the page shortly.
            </div>)}
      </div >

      <div className="dimmer"></div>
    </>
  );
};
