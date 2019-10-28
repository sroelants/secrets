import './Modal.scss';
import React from 'react';
import { ModalType } from './App'

export interface IModal {
  visible: boolean;
  closeHandler: (t: ModalType | null) => void;
}

export const AboutModal: React.FC<IModal> = ({ visible, closeHandler }) => {
  return (
    <>
      <div className={visible ? "about-modal modal visible" : "about-modal modal"} >
        <button className="modal__close" onClick={() => {
          closeHandler(null);
        }}>
        <img aria-label="close"
          src="assets/img/close.svg"
          width="25px"
          alt="close" />
        </button>
        <div className="modal__title">About Secrets</div>
        <div className="modal__content">
          <p>
          We all know that feeling of relief after sharing a long-kept secret
          with someone. A weight is lifted. What seemed like a terrible or
          embarrasing thing all of a sudden doesn't seem that important anymore.
          Sharing secrets with people brings us perspective. We're not only
          opening ourselves up to them, we're opening up to ourselves.
        </p>

        <p>
          The science <a href="https://psycnet.apa.org/record/2017-20428-001"
          target="_blank" rel="noopener noreferrer"> has
          long been in </a> on the benefits of sharing secrets with
          others. Keeping secrets is a mental, emotional and physical burden.
          Our minds keep drifting and focussing on them. We are more anxious
          and adrenaline levels and blood pressure are above average.
        </p>
        <p>
          On the flip side, sharing secrets with others has a tremendous effect
          on us. Even if we're uncomfortable sharing with someone close to us,
          for fear of judgement, we ofter share our deepest secrets with people
          we're not close to, even complete strangers like a hairdresser or
          taxi driver. Sharing secrets forms bonds of trust, they strengthen
          social cohesion, even between strangers. Aside from benefiting us
          emotionally and physically, sharing secrets benefits our society as a
          hole.
        </p>
        <p>
          This page is meant as a platform for people to share their secrets
          with strangers, completely anonymously. Perhaps the person sitting
          next to you on the bus tomorrow will know and sympathize with
          something you haven't yet had the courage to face up to, and that is
          an encouraging thought.
        </p>
        </div>
      </div >
      <div className="dimmer"></div>
    </>
  );
};
