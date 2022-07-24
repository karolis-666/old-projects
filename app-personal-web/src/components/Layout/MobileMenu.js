import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import './../../css/layout.css';

const MobileMenu = props => {
  const handleMenuCloseOuter = event => {
    if (event.target.className === 'side-drawer') {
      props.handleMenuClose();
    }
  };

  const content = (
    <nav className='side-drawer' onClick={handleMenuCloseOuter}>
      <div className='side-drawer-links'>
        <NavLink onClick={props.handleMenuClose} to='/'>
          Home
        </NavLink>
        <NavLink onClick={props.handleMenuClose} to='/resume'>
          Resume
        </NavLink>
        <NavLink onClick={props.handleMenuClose} to='/contact'>
          Contact
        </NavLink>
      </div>
    </nav>
  );

  return ReactDOM.createPortal(content, document.getElementById('mobile-hook'));
};

export default MobileMenu;
