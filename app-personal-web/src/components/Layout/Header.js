import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import MobileMenu from './MobileMenu';
import menu from './../../assets/menu.png';
import './../../css/layout.css';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuOpen = () => {
    setMobileMenu(true);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'scroll';
  };

  const handleMenuClose = () => {
    setMobileMenu(false);
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.overflowY = '';
  };

  return (
    <header className='header'>
      <NavLink to='/' className='logo'>
        <h1>
          Karolis Palšauskas <span>junior developer</span>
        </h1>
      </NavLink>
      <nav className='navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      <nav className='mobile-navigation' onClick={handleMenuOpen}>
        <img src={menu} alt='menu' />
      </nav>
      {mobileMenu && <MobileMenu handleMenuClose={handleMenuClose} />}
    </header>
  );
};

export default Header;
