/* eslint-disable arrow-body-style */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { HASH_TAG_ICON, LOGO_IMG, RECORD_VOICE_OVER } from '../../../assets/images';
import './Navbar.css';

const NAV_TABS = [
  {
    name: 'Special',
    link: '/special',
  },
  {
    name: 'Main',
    link: '/main',
  },
  {
    name: 'Deserts',
    link: '/deserts',
  },
  {
    name: 'Beverages',
    link: '/beverages',
  },
  {
    name: 'Store',
    link: '/store',
  },
];
const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="navbar-top-section">
        <div className="logo-section">
          <img src={LOGO_IMG} alt="logo" />
          <span>Sacred Earth Cafe</span>
        </div>
        <div className="button-section">
          <button type="button" className="btn-light">
            <img src={RECORD_VOICE_OVER} alt="record_voice_over" />
          </button>
          <button type="button" className="btn-light">
            <img src={HASH_TAG_ICON} alt="hash_tag_icon" />
          </button>
        </div>
      </div>
      <nav>
        <ul className="nav-items">
          {NAV_TABS.map(tab => (
            <li className="nav-item" key={tab.name}>
              <NavLink to={tab.link}>{tab.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
