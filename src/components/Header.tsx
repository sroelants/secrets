import React from 'react';
import './Header.scss';
import { Nav, INav } from './Nav';
import { ModalType } from './Modal';
import { SecretTyper } from './SecretTyper';

export interface IHeader {
  clickHandler: (t: ModalType | null) => void;
}

export const Header: React.FC<IHeader> = ({ clickHandler }) => {
  const NavProps: INav = { clickHandler };
  return (
    <header className="header">
      <Nav {...NavProps} />
      <div className="header__title">Share your secrets with the world.</div>
      <SecretTyper />
    </header>
  );
}
