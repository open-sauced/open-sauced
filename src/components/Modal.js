import React from "react";
import {Backdrop, BackdropContent} from "../styles/Backdrop";

const Modal = ({modalOpen, setModalOpen, children}) => {
  return (
    <React.Fragment>
      {modalOpen ? (
        <React.Fragment>
          <Backdrop
            onClick={() => setModalOpen(false)}
          />
        </React.Fragment>
      ) : null}
      <BackdropContent modalOpen={modalOpen}>
        {children}
      </BackdropContent>
    </React.Fragment>
  );
};

export default Modal;
