import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';

import { stateActions } from '../../store/global-state';
import classes from './Weather.module.css';

const NewWidget = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(state => state.weather.widgetModal);

  return (
    <div className={classes.add}>
      <div onClick={() => dispatch(stateActions.callWidgetModal())}>
        <div className={classes.plus}>+</div>
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default NewWidget;
