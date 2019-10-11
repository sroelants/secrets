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
      <Modal visible={modalState === ModalType.About} type={ModalType.About} closeHandler={setModalHandler} />
      <Modal visible={modalState === ModalType.Share} type={ModalType.Share} closeHandler={setModalHandler} />
      < footer className="footer">Footer</footer>
    </div >
  );
};

export default App;
