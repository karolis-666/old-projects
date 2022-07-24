import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

// Layout
import Container from './components/Layout/Container';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Page components
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Scroll up
import ScrollUp from './utils/ScrollUp';

// css
import './css/index.css';

const Content = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      <ScrollUp>
        <Switch location={displayLocation}>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </ScrollUp>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
