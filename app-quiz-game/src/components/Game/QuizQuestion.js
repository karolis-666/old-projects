import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Game.module.css';
import healthBar from '../../utils/health';
import { gameActions } from './../../store/game-slice';
import Modal from './Modal';

const QuizQuestion = props => {
  const dispatch = useDispatch();

  const [answers, setAnswers] = useState('');
  const [question, setQuestion] = useState('');
  const [countdown, setCountdown] = useState(20);
  const [life, setLife] = useState(3);
  const [gameover, setGameover] = useState(false);
  const [win, setWin] = useState(false);
  const [message, setMessage] = useState('');
  const [blink, setBlink] = useState(true);

  const NO = useSelector(state => state.game.questionNumber) - 1;

  const buttons = document.querySelectorAll('#b1, #b2, #b3, #b4');

  const clearButtonStyles = () => {
    [].forEach.call(buttons, e => {
      e.classList.remove(classes.wrong);
    });
  };

  const timeFormater = time => {
    if (time >= 10) {
      return `0:${time}`;
    }
    if (time > 0) {
      return `0:0${time}`;
    } else {
      return `0:00`;
    }
  };

  const handleAnswerGuess = e => {
    console.log(e.target);
    // Win
    if (e.target.innerText.slice(3) === props.data[NO].correct_answer && NO === 9) {
      setWin(true);
      setCountdown(false);
      setMessage('All questions answered successfully');
    }

    // Prompts second question
    if (e.target.innerText.slice(3) === props.data[NO].correct_answer && NO !== 9 && life) {
      dispatch(gameActions.callNextQuestion());
      clearButtonStyles();
      setCountdown(20);
      setBlink(true);
    }

    // Take life out
    if (e.target.innerText.slice(3) !== props.data[NO].correct_answer && life) {
      e.target.classList.add(classes.wrong);
      setLife(life - 1);
    }

    // Game over - all lives dead
    if (e.target.innerText.slice(3) !== props.data[NO].correct_answer && life === 1) {
      setGameover(true);
      setCountdown(false);
      setMessage('You ran out of lives!');
    }
  };

  // Loads question and answers to component
  useEffect(() => {
    const answers = props.data[NO].incorrect_answers.map(el => el);
    answers.push(props.data[NO].correct_answer);
    answers.sort((a, b) => 0.5 - Math.random());
    setAnswers(answers);
    setQuestion(props.data[NO].question);
  }, [NO, props.data]);

  // Countdown timer & force gameover when time runs out
  useEffect(() => {
    const timer = countdown > -1 && !win && setInterval(() => setCountdown(countdown - 1), 1000);
    if (countdown === -1 && !gameover) {
      setGameover(true);
      setMessage('You ran out of time!');
    }
    return () => clearInterval(timer);
  }, [countdown, gameover, win]);

  useEffect(() => {
    const blinkTimer =
      countdown > -1 && !win && countdown < 6 && setInterval(() => setBlink(!blink), 200);
    return () => clearInterval(blinkTimer);
  }, [countdown, blink, win]);

  return (
    <div>
      <div className={classes.headline}>
        <div className={classes['question-no']}>{NO + 1} / 10</div>
        <div className={classes.question}>
          <div>{question}</div>
          <div className={blink ? `${classes.timer}` : `${classes.timer} ${classes.warn}`}>
            {timeFormater(countdown)}
          </div>
        </div>
      </div>
      <div className={classes.answers}>
        <button id='b1' onClick={handleAnswerGuess}>
          A. {answers[0]}
        </button>
        <button id='b2' onClick={handleAnswerGuess}>
          B. {answers[1]}
        </button>
        <button id='b3' onClick={handleAnswerGuess}>
          C. {answers[2]}
        </button>
        <button id='b4' onClick={handleAnswerGuess}>
          D. {answers[3]}
        </button>
      </div>
      <div className={classes.life}>{healthBar(life)}</div>
      {gameover && <Modal styling='gameover' status='GAMEOVER' message={message} />}
      {win && <Modal styling='win' status='GAME WON!' message={message} />}
    </div>
  );
};

export default QuizQuestion;
