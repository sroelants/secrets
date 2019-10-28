import React from "react";
import { ModalType } from "./App";
import { INav, Nav } from "./Nav";
import "./StickyNav.scss";

export interface IStickyNav {
  isVisible: boolean;
  clickHandler: (t: ModalType | null) => void;
}

export const StickyNav: React.FC<IStickyNav> = ({
  isVisible,
  clickHandler,
}) => {
  return (
    <div className={isVisible ? "stickynav stickynav--visible" : "stickynav"}>
    </div>
  );
};
