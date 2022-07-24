import './../../css/contact.css';

const Contact = () => {
  return (
    <div>
      <h1 className='contact-container title'>Contact</h1>
      <div className='contact-container'>
        <p>Looking forward to hearing from you</p>
        <div className='contact-box'>
          <p>Telephone</p>
          <span>+370 619 62450</span>
        </div>
        <div className='contact-box'>
          <p>Email</p>
          <a href='mailto:karolis.palsauskas@gmail.com'>karolis.palsauskas@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
