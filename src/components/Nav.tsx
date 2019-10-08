import React from 'react';
import './Nav.scss';
import { ModalType } from './Modal';

export interface INav {
  clickHandler: (t: ModalType | null) => void;
}
export const Nav: React.FC<INav> = ({ clickHandler }) => {
  return (
    <nav className="header__nav">
      <div className="header__nav__brand">Secrets.</div>
      <div className="header__nav__links">
        <a href="#"
          className="header__nav__link"
          onClick={() => clickHandler(ModalType.About)}>About</a>
        <a href="#"
          className="header__nav__link"
          onClick={() => clickHandler(ModalType.Share)}>Share a secret</a>
      </div>
    </nav>
  );
}
