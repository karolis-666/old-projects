import ResumeSection from './ResumeSection';
import Skills from './Skills';
import { EXPERIENCE, EDUCATION, SKILLS } from './CV';
import './../../css/resume.css';

const Resume = () => {
  return (
    <div>
      <h1 className='resume-container title'>Resume</h1>
      <div className='resume-section'>
        <ResumeSection title='Work experience' data={EXPERIENCE} />
      </div>
      <div className='resume-section'>
        <ResumeSection title='Education' data={EDUCATION} />
      </div>
      <div className='resume-section'>
        <Skills title='Skills' data={SKILLS} />
      </div>
    </div>
  );
};

export default Resume;
