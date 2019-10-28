import React, {useState, useEffect} from "react";
import { CompactNav } from "./CompactNav";
import { ModalType } from "./App";
import "./Modal.scss";
import "./Nav.scss";

export interface INav {
  clickHandler: (t: ModalType | null) => void;
  stickyNav: boolean;
}

export const Nav: React.FC<INav> = ({ clickHandler, stickyNav }) => {
  const windowWidth = useWindowWidth();

  // Either show the menu links, or a Compact menu button revealing a side menu
  const menu = (windowWidth <= 700) ? (
    <>
      <CompactNav clickHandler={clickHandler} />
    </>
  ) : (
    <div className="nav__links">
      <div className="nav__link" onClick={() => clickHandler(ModalType.About)}>
        About
      </div>
      <div className="nav__link" onClick={() => clickHandler(ModalType.Share)}>
        Share a secret
      </div>
    </div>
  );

  return (
    <nav className={(stickyNav) ? "nav sticky-nav" : "nav"}>
      <a href="/" className="nav__brand">Secrets.</a>
      {menu}
    </nav>
  );
};

  // useWindowWidth hook
  const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };
