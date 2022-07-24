import './../../css/home.css';
import portrait from './../../assets/portrait.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero'>
      <div className='hero-image'>
        <img src={portrait} alt='' />
      </div>
      <div className='hero-text'>
        <div className='hero-text__title'>
          <p>Hello, I'm</p>
          <p>Karolis Palšauskas</p>
        </div>
        <div className='hero-text__description'>
          I am an ambitious and logic-based individual looking to kick-start a career in programming
          and pursue business problems.
        </div>
        <div className='hero-text__buttons'>
          <NavLink to='/resume'>
            <span>Resume</span>
          </NavLink>
          <NavLink to='/contact'>
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
