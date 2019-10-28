import React, { useState } from "react";
import { ModalType } from "./App";
import "./CompactNav.scss";
import "./Modal.scss";
import "./Nav.scss";

export interface INav {
  clickHandler: (t: ModalType | null) => void;
}
export const CompactNav: React.FC<INav> = ({ clickHandler }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={open 
        ? "nav__hamburger nav__hamburger--open"
        : "nav__hamburger"}
        onClick={() => setOpen(!open)}>
        <div className="nav__hamburger__bar nav__hamburger__top-bar" />
        <div className="nav__hamburger__bar nav__hamburger__middle-bar" />
        <div className="nav__hamburger__bar nav__hamburger__bottom-bar" />
      </div>
      <div className={open? "sidemenu sidemenu--visible":"sidemenu"} 
        will-change={true}>
        <div className="nav__links">
          <div className="nav__link" onClick={() => {
            clickHandler(ModalType.About)
            setOpen(!open)
          }
          }>
            About
          </div>
            <div className="nav__link" onClick={() => {clickHandler(ModalType.Share)
            setOpen(!open)}}>
            Share a secret
          </div>
        </div>
      </div>

      <div className={open? "overlay overlay--visible":"overlay"} />
    </>
  );
};
