import React from 'react';
import { ModalType } from './App';
import './StickyNav.scss';


export interface IStickyNav {
  isVisible: boolean
  clickHandler: (t: ModalType) => void
}

export const StickyNav: React.FC<IStickyNav> = ({ isVisible, clickHandler }) => {

  return (
    <nav className={isVisible ? "nav nav--visible" : "nav"}>
      <div className="nav__brand"><a href="#">Secrets.</a></div>
      <div className="nav__links">
        <div
          className="nav__link"
          onClick={() => clickHandler(ModalType.About)}>About</div>
        <div
          className="nav__link"
          onClick={() => clickHandler(ModalType.Share)}>Share a secret</div>
      </div>
    </nav>
  );
}
