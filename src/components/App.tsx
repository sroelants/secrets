import React, { useState } from 'react';
import './App.scss';
import { Modal, ModalType, IModal } from './Modal';
import { Header, IHeader } from './Header';
import { Card } from './Card';

const App: React.FC = () => {
  const [modalState, setModalState] = useState<ModalType | null>(null);

  const setModalHandler = (mode: ModalType | null) => {
    setModalState(mode);
    console.log(mode);
  }

  const HeaderProps: IHeader = { clickHandler: setModalHandler };
  /* const modalProps: IModal = {
   *   type: ModalType.About,
   *   closeHandler: setModalHandler,
   * }; */

  return (
    <div className="App">
      <Header {...HeaderProps} />
      <main className="main">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      {modalState !== null
        ? <Modal type={modalState} closeHandler={setModalHandler} />
        : null}
      < footer className="footer">Footer</footer>
    </div >
  );
};

export default App;
