import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { gameActions } from './../../store/game-slice';
import Loader from './../Helpers/Loader';
import QuizQuestion from './QuizQuestion';
import corrector from './../../utils/regex';

const Quiz = () => {
  const dispatch = useDispatch();

  const categoryID = useSelector(state => state.game.categoryID);
  const quizData = useSelector(state => state.game.quizQuestions);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://opentdb.com/api.php?amount=4&category=${categoryID}&difficulty=easy&type=multiple&url3986`
      ).then(value => value.json()),
      fetch(
        `https://opentdb.com/api.php?amount=3&category=${categoryID}&difficulty=medium&type=multiple&url3986`
      ).then(value => value.json()),
      fetch(
        `https://opentdb.com/api.php?amount=3&category=${categoryID}&difficulty=hard&type=multiple&url3986`
      ).then(value => value.json()),
    ])
      .then(([easy, medium, hard]) => {
        const data = [...easy.results, ...medium.results, ...hard.results];
        dispatch(gameActions.setQuizQuestions(corrector(data)));
      })
      .catch(err => {
        console.log(err);
      });
  }, [categoryID, dispatch]);

  return (
    <Fragment>
      {!quizData && <Loader />}
      {quizData && <QuizQuestion data={quizData} />}
    </Fragment>
  );
};

export default Quiz;
