import './../../css/resume.css';

const ResumeSection = props => {
  return (
    <div className='resume-container'>
      <div className='resume-section-title'>{props.title}</div>
      <div>
        {props.data.map(obj => {
          return (
            <div key={obj.title} className='resume-history'>
              <div className='resume-date'>{obj.date}</div>
              <div>
                <div className='resume-title'>{obj.title}</div>
                <div>{obj.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeSection;
