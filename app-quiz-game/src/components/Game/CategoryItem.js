import { useDispatch } from 'react-redux';

import { gameActions } from './../../store/game-slice';

const CategoryItem = props => {
  const dispatch = useDispatch();

  const handleGameplayStart = () => {
    dispatch(gameActions.startQuiz());
    dispatch(gameActions.setCategoryID(props.data.id));
  };

  return (
    <span onClick={handleGameplayStart}>
      {'>'} {props.data.category}
    </span>
  );
};

export default CategoryItem;
