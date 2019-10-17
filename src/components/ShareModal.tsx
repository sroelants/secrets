import React, { useState, useEffect } from 'react';
import './Modal.scss';
import './ShareModal.scss';
import { ModalType } from './App';

export interface IModal {
  visible: boolean,
  closeHandler: (t: ModalType | null) => void
}


export const ShareModal: React.FC<IModal> = ({ visible, closeHandler }) => {
  const [secret, setSecret] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // When turned visible (visible changes and is set to true)
  // reset submitted to false.
  useEffect(() => { if (visible) setSubmitted(false) }, [visible]);

  const handleChange = (e: any) => {
    setSecret(e.target.value);
  };

  const handleSubmit = (e: any) => {
    const secret = e.target.querySelector('.shareform__textarea').value;
    const body = { secret: secret, date_posted: (new Date(Date.now())).toISOString() };
    console.log(body);
    console.log(JSON.stringify(body));

    const response = fetch('http://localhost:5000/api/secrets', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: (new Headers({ 'Content-Type': 'application/json' }))
    });

    setSubmitted(true);
    e.preventDefault();
  };


  return (
    <>
      <div className={visible ? "modal visible" : "modal"} >
        <button className="modal__close" onClick={() => {
          closeHandler(null)
          setSecret('');
        }}>

          <span role="img" aria-label="close">
            &#10060;
          </span>
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
                      className="shareform__button shareform__clear"
                      onClick={() => setSecret('')}> Clear </button>
                    <input type="submit"
                      value="Share"
                      className="shareform__button shareform__submit" />
                  </div>
                </form>
              </div>
            </>)
          : (
            <div className="shareform__success">
              <img src="/assets/img/icon--checkmark.svg" width="50px" className="shareform__success-icon" />
              Success! Your secret was submitted and should appear
            shortly.</div>)}
      </div >

      <div className="dimmer"></div>
    </>
  );
}
