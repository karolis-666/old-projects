import ReactDOM from 'react-dom';
import { Fragment } from 'react';

import Backdrop from './Backdrop';
import Input from './Input';

const Modal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Input />, document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default Modal;
