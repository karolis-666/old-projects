import linkedin from './../../assets/linkedin.png';
import instagram from './../../assets/instagram.png';
import github from './../../assets/github.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <p className='footer-title'>Phone</p>
        <p>+370 619 62450</p>
      </div>
      <div>
        <p className='footer-title'>Email</p>
        <a href='mailto:karolis.palsauskas@gmail.com'>karolis.palsauskas@gmail.com</a>
      </div>
      <div>
        <p className='footer-title'>Follow</p>
        <div className='footer-links'>
          <a rel='noreferrer' target='_blank' href='https://www.instagram.com/zefyras_/'>
            <img src={instagram} alt='' />
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/karolis-palšauskas-623865150'
          >
            <img src={linkedin} alt='' />
          </a>
          <a rel='noreferrer' target='_blank' href='https://github.com/kharolis'>
            <img src={github} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
