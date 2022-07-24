import { Fragment } from 'react';
import heart from './../assests/full.png';
import emptyHeart from './../assests/dead.png';

const healthBar = lives => {
  if (lives === 3) {
    return (
      <Fragment>
        <img className='heart' src={heart} alt='heart' />
        <img className='heart' src={heart} alt='heart' />
        <img className='heart' src={heart} alt='heart' />
      </Fragment>
    );
  }
  if (lives === 2) {
    return (
      <Fragment>
        <img className='heart' src={heart} alt='heart' />
        <img className='heart' src={heart} alt='heart' />
        <img className='heart' src={emptyHeart} alt='heart' />
      </Fragment>
    );
  }
  if (lives === 1) {
    return (
      <Fragment>
        <img className='heart' src={heart} alt='heart' />
        <img className='heart' src={emptyHeart} alt='heart' />
        <img className='heart' src={emptyHeart} alt='heart' />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <img className='heart' src={emptyHeart} alt='heart' />
      <img className='heart' src={emptyHeart} alt='heart' />
      <img className='heart' src={emptyHeart} alt='heart' />
    </Fragment>
  );
};

export default healthBar;
