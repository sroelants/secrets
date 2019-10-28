import "./App.scss";
import React, { useState } from "react";
import { AboutModal } from "./AboutModal";
import { Header, IHeader } from "./Header";
import { Secrets } from "./Secrets";
import { ShareModal } from "./ShareModal";

export enum ModalType {
  About,
  Share,
}

const App: React.FC = () => {
  const [modalState, setModalState] = useState<ModalType | null>(null);

  const setModalHandler = (mode: ModalType | null) => {
    setModalState(mode);
  };

  const HeaderProps: IHeader = { clickHandler: setModalHandler };

  return (
    <div className="App">
      <Header {...HeaderProps} />
      <main className="main">
        <Secrets />
      </main>
      <AboutModal visible={modalState === ModalType.About}
        closeHandler={setModalHandler} />
      <ShareModal visible={modalState === ModalType.Share}
        closeHandler={setModalHandler} />
      <footer className="footer">
        <p>
        Created by
        <a href="https://www.samroelants.com"
          target="_blank"
          rel="noopener noreferrer">
           &nbsp;Sam Roelants
        </a>
      </p>
      </footer>
    </div>
  );
};

export default App;
