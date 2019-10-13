import React, { useState, useRef, useEffect } from 'react';
import './App.scss';
import { Modal, ModalType, IModal } from './Modal';
import { Header, IHeader } from './Header';
import { Secrets } from './Secrets';
import { StickyNav, IStickyNav } from './StickyNav';

const App: React.FC = () => {
  const [modalState, setModalState] = useState<ModalType | null>(null);
  const [stickyNav, setStickyNav] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => setStickyNav(!entry.isIntersecting),
      { threshold: 0 });

    let ref = stickyRef.current
    if (ref) observer.observe(ref);
    return () => {
      let ref = stickyRef.current;
      if (ref) observer.unobserve(ref)
    }
  }, []);


  const setModalHandler = (mode: ModalType | null) => {
    setModalState(mode);
  }

  const HeaderProps: IHeader = { clickHandler: setModalHandler };
  /* const modalProps: IModal = {
   *   type: ModalType.About,
   *   closeHandler: setModalHandler,
   * }; */

  return (
    <div className="App">
      <StickyNav isVisible={stickyNav} clickHandler={setModalHandler} />
      <Header {...HeaderProps} />
      <div ref={stickyRef}></div>
      <main className="main">
        <Secrets />
      </main>
      <Modal visible={modalState === ModalType.About}
        type={ModalType.About}
        closeHandler={setModalHandler} />
      <Modal visible={modalState === ModalType.Share}
        type={ModalType.Share}
        closeHandler={setModalHandler} />
      <footer className="footer">Footer</footer>
    </div >
  );
};

export default App;
