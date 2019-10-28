import React, {useState, useRef, useEffect} from "react";
import { ModalType } from "./App";
import "./Header.scss";
import { INav, Nav } from "./Nav";
import { SecretTyper } from "./SecretTyper";

export interface IHeader {
  clickHandler: (t: ModalType | null) => void;
}

export const Header: React.FC<IHeader> = ({ clickHandler }) => {
  const [stickyNav, setStickyNav] = useState(false);
  const stickyRef = useRef(null); // Reference to observed element

  // Set Sticky nav Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      // If isIntersecting is false, set stickyNav to true.
      ([entry]) => setStickyNav(!entry.isIntersecting),
      { rootMargin: "0px",
        threshold: 0.9});

    const ref = stickyRef.current;
    if (ref) {
      observer.observe(ref);  // If ref is populated, set observer.

      // Clean up: Remove the observer afterwards.
      return () => observer.unobserve(ref);
    }

    // Clean up: remove the observer.
  }, []);
  const NavProps: INav = { clickHandler, stickyNav };
  return (
    <header className="header" ref={stickyRef}>
      <Nav {...NavProps} />
      <div className="header__title">Share your secrets with the world.</div>
      <SecretTyper />
    </header>
  );
};
