const apiCall = city => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=395eded0610f7af5a8f47fcae48cb930`;
};

export default apiCall;
