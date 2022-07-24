import { useDispatch } from 'react-redux';

import { stateActions } from './../../store/global-state';
import classes from './Modal.module.css';

const Backdrop = () => {
  const dispatch = useDispatch();

  document.onkeydown = e => {
    if (e.key === 'Escape') {
      dispatch(stateActions.killWidgetModal());
    }
  };

  return (
    <div onClick={() => dispatch(stateActions.killWidgetModal())} className={classes.backdrop} />
  );
};

export default Backdrop;
