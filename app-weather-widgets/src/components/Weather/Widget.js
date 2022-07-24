import { useDispatch, useSelector } from 'react-redux';

import { stateActions } from './../../store/global-state';
import { deleteWeatherWidget } from './../../store/local-storage';
import classes from './Weather.module.css';

const Widget = props => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.weather.sessionData);

  const { city, temp, sky, country, icon } = props;

  const handleWeatherWidgetDelete = () => {
    const updatedData = data.filter(obj => obj.name !== city);
    dispatch(stateActions.updateSessionDataByDelete(updatedData));
    deleteWeatherWidget(city);
  };

  const trimCityName = city => {
    if (city.length <= 12) {
      return `${city}, ${country}`;
    } else {
      return city.substring(0, 12) + '...';
    }
  };

  return (
    <div onDoubleClick={handleWeatherWidgetDelete} className={classes.widget}>
      <p className={classes['widget-city']}>{trimCityName(city)}</p>
      <div className={classes['widget-icon']}>
        <img src={require(`./../../assets/${icon}.svg`).default} alt='' />
      </div>
      <p className={classes['widget-temp']}>{temp.toFixed()}°</p>
      <p className={classes['widget-sky']}>{sky}</p>
    </div>
  );
};

export default Widget;
