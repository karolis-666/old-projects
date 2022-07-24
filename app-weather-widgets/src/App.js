import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { init, updateWeatherWidgets, getWeatherData } from './store/local-storage';
import { stateActions } from './store/global-state';

import Container from './components/Layout/Container';
import Dashboard from './components/Weather/Dashboard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    init();
    updateWeatherWidgets();
    dispatch(stateActions.loadSessionData(getWeatherData()));
  }, []);

  return (
    <Container>
      <h1>Weather app</h1>
      <Dashboard />
    </Container>
  );
}

export default App;

// http://api.openweathermap.org/data/2.5/weather?q=vilnius&units=metric&appid=395eded0610f7af5a8f47fcae48cb930
