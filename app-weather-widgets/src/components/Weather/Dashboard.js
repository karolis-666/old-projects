import { useSelector } from "react-redux";

import Widget from "./Widget";
import NewWidget from "./NewWidget";
import classes from "./Weather.module.css";

const Dashboard = () => {
  const isDataLoaded = useSelector(state => state.weather.loaded);
  const data = useSelector(state => state.weather.sessionData);

  return (
    <main className={classes.dashboard}>
      {isDataLoaded &&
        data.map((e, i) => (
          <Widget
            key={i}
            city={e.name}
            temp={e.main.temp}
            sky={e.weather[0].description}
            icon={e.weather[0].icon}
            country={e.sys.country}
          />
        ))}
      <NewWidget />
    </main>
  );
};

export default Dashboard;
