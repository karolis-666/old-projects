import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Container from './components/Layout/Container';
import StartGame from './components/Game/StartGame';
import Categories from './components/Game/Categories';
import Quiz from './components/Game/Quiz';
import Loader from './components/Helpers/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  const isInitScreen = useSelector(state => state.game.gameInitialScreen);
  const isCategoryScreen = useSelector(state => state.game.gameCategoryScreen);
  const isGame = useSelector(state => state.game.gameplayScreen);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {!loading && isInitScreen && <StartGame />}
      {!loading && isCategoryScreen && <Categories />}
      {!loading && isGame && <Quiz />}
    </Container>
  );
};

export default App;
