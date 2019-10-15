import React, { useState, useEffect } from 'react';
import './Modal.scss';
import { ShareForm } from './ShareForm';
import { ModalType } from './App';

export interface IModal {
  visible: boolean,
  closeHandler: (t: ModalType | null) => void
}


export const ShareModal: React.FC<IModal> = ({ visible, closeHandler }) => {
  return (
    <>
      <div className={visible ? "modal visible" : "modal"} >
        <button className="modal__close" onClick={() => closeHandler(null)}>
          <span role="img" aria-label="close">
            &#10060;
          </span>
        </button>
        <div className="modal__title">Share a secret</div>
        <div className="modal__content">
          <ShareForm />
        </div>
      </div >
      <div className="dimmer"></div>
    </>
  );
}
