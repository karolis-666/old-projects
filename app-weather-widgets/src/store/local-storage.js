import apiCall from '../utils/apiCall';

const KEY = 'weather202108';

// Get JSON of all weather widgets from local storage
const getWeatherData = () => {
  return JSON.parse(localStorage.getItem(KEY));
};

// Save new weather widget data to local storage
const saveWeatherData = data => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

// Creates local storage for first time user
const init = () => {
  if (localStorage.getItem(KEY) === null) {
    return saveWeatherData([]);
  }
};

// Update existing weather widgets on page load / refresh
const updateWeatherWidgets = () => {
  let updatedData = [];
  const cityData = getWeatherData().map(obj => obj.name);
  cityData.forEach((c, i) =>
    fetch(apiCall(c))
      .then(res => res.json())
      .then(data => {
        data.no = i;
        updatedData.push(data);
        updatedData.sort((a, b) => a.no - b.no);
        saveWeatherData(updatedData);
      })
  );
};

// Add's new weather widget to local storage
const addNewWeatherWidget = data => {
  const clone = getWeatherData();
  clone.push(data);
  saveWeatherData(clone);
};

// Delete weather widget
const deleteWeatherWidget = city => {
  const clone = getWeatherData();
  const newData = clone.filter(obj => obj.name !== city);
  saveWeatherData(newData);
};

// Check's if new weather widget already exist in local storage
const dataCheck = input => {
  let output = false;
  const clone = getWeatherData();
  clone.forEach(obj => {
    if (obj.name.toLowerCase() === input.toLowerCase()) {
      output = true;
    }
  });
  return output;
};

export {
  init,
  getWeatherData,
  updateWeatherWidgets,
  addNewWeatherWidget,
  deleteWeatherWidget,
  dataCheck,
};
