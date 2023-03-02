import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './styles.scss';
import { images } from '../../constants';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'skills', 'contact', 'work', 'skills'].map(
          (item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}> {item}</a>
            </li>
          )
        )}
      </ul>

      <div className='app__navbar-menu'></div>
    </nav>
  );
};

export default Navbar;
