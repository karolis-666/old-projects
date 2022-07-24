import { useDispatch } from 'react-redux';

import { gameActions } from '../../store/game-slice';
import classes from './Game.module.css';

const Modal = props => {
  const dispatch = useDispatch();

  const styling = props.styling;

  return (
    <div className={`${classes[styling]} ${classes.modal}`}>
      <p>{props.status}</p>
      <small>{props.message}</small>
      <button className={classes.restart} onClick={() => dispatch(gameActions.restartGame())}>
        Click here to restart
      </button>
    </div>
  );
};

export default Modal;
