import './../../css/resume.css';
import full from './../../assets/oval-full.png';
import half from './../../assets/oval-half.png';
import empty from './../../assets/oval-empty.png';

const Dots = rating => {
  const determineDot = (i, rating) => {
    const rate = rating.rating;
    if (rate % 1 !== 0) {
      let value = Math.ceil(rate);
      if (i < value) {
        return full;
      }
      if (i === value) {
        return half;
      }
      if (i > value) {
        return empty;
      }
    }
    if (i <= rate) {
      return full;
    } else {
      return empty;
    }
  };

  return (
    <>
      <img src={determineDot(1, rating)} alt='' />
      <img src={determineDot(2, rating)} alt='' />
      <img src={determineDot(3, rating)} alt='' />
      <img src={determineDot(4, rating)} alt='' />
      <img src={determineDot(5, rating)} alt='' />
    </>
  );
};

const Skills = props => {
  return (
    <div className='resume-container'>
      <div className='resume-section-title'>{props.title}</div>
      <div>
        {props.data.map(obj => {
          return (
            <div key={obj.skill} className='resume-history'>
              <div className='resume-date'></div>
              <div className='skill'>
                <div>{obj.skill}</div>
                <div className='skill-dots'>{<Dots rating={obj.rating} />}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
