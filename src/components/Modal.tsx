import React, { useState, useEffect } from 'react';
import './Modal.scss';

export enum ModalType {
  About,
  Share
}

export interface IModal {
  visible: boolean
  type: ModalType;
  closeHandler: (t: ModalType | null) => void;
}

export const Modal: React.FC<IModal> = ({ visible, type, closeHandler }) => {
  return (
    <>
      <div className={visible ? "modal visible" : "modal"} >
        <button className="modal__close" onClick={() => {
          setTimeout(() => closeHandler(null));
        }}>
          <span role="img" aria-label="close">
            &#10060;
          </span>
        </button>
        <div className="modal__title">About Secrets.</div>
        <div className="modal__content">
          <p> Aliquam erat volutypat. Nunc eleifend leo vitae magna. In id erat
            non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut,
            lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus.
            Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec
            at pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id
            enim. Phasellus neque orci, porta a, aliquet quis, semper a, massa.
            Phasellus purus. Pellentesque tristique imperdiet tortor. Nam
            euismod tellus id erat. </p>

          <p> Nullam eu ante vel est convallis dignissim. Fusce suscipit, wisi
            nec facilisis facilisis, est dui fermentum leo, quis tempor ligula
            erat quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed
            pede. Sed bibendum. Aliquam posuere. Nunc aliquet, augue nec
            adipiscing interdum, lacus tellus malesuada massa, quis varius mi
            purus non odio. Pellentesque condimentum, magna ut suscipit
            hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet
            urna. Curabitur vulputate vestibulum lorem. Fusce sagittis, libero
            non molestie mollis, magna orci ultrices dolor, at vulputate neque
            nulla lacinia eros. Sed id ligula quis est convallis tempor.
            Curabitur lacinia pulvinar nibh. Nam a sapien. </p>

          <p> Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat
            non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut,
            lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus.
            Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec
            at pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id
            enim. Phasellus neque orci, porta a, aliquet quis, semper a, massa.
            Phasellus purus. Pellentesque tristique imperdiet tortor. Nam
            euismod tellus id erat. </p>
        </div>
      </div>
      <div className="dimmer" onClick={() => closeHandler(null)}></div>
    </>
  );
}

