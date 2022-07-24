import { useDispatch } from 'react-redux';

import { gameActions } from '../../store/game-slice';
import classes from './Game.module.css';

const StartGame = () => {
  const dispatch = useDispatch();

  const handleGameStart = () => {
    dispatch(gameActions.startCategoryScreen());
  };

  return (
    <button onClick={handleGameStart} className={classes['btn-start']}>
      Start game
    </button>
  );
};

export default StartGame;
