import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { stateActions } from '../../store/global-state';
import { addNewWeatherWidget, dataCheck } from './../../store/local-storage';
import apiCall from '../../utils/apiCall';
import classes from './Modal.module.css';

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleInputUpdate = e => {
    setInput(e.target.value);
    setError('');
  };

  const handleInputSubmit = e => {
    if (e.key === 'Enter') {
      if (!input) {
        setError('Please write a city name');
        return;
      }

      if (input) {
        fetch(apiCall(input))
          .then(res => res.json())
          .then(data => {
            if (data.cod === '404') {
              setError('City could not be found');
              return;
            }

            if (dataCheck(data.name)) {
              setError('City is already in dashboard');
              return;
            }

            e.target.value = '';
            setInput('');
            addNewWeatherWidget(data);
            dispatch(stateActions.updateSessionDataByAdd(data));
            dispatch(stateActions.killWidgetModal());
          });
      }
    }
  };

  return (
    <div className={classes.modal}>
      <h6>Type desired city</h6>
      <input autoFocus onChange={handleInputUpdate} onKeyPress={handleInputSubmit} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
