/* eslint-disable arrow-body-style */
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import {
  ARROW_LEFT_ICON,
  CHAT_ICON,
  HASH_TAG_ICON,
  LOGO_IMG,
  RECORD_VOICE_OVER,
} from '../../../assets/images';
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
const Navbar = props => {
  const { hideNavItems } = props;
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/special');
  };
  return (
    <div className="navbar-section">
      <div className={`navbar-top-section ${hideNavItems && 'mb-3'}`}>
        {hideNavItems ? (
          <div className="back-button-section">
            <button type="button" className="back-btn" onClick={handleGoBack}>
              <img src={ARROW_LEFT_ICON} alt="back-arrow" />
            </button>
            <span>Place Order</span>
          </div>
        ) : (
          <div className="logo-section">
            <img src={LOGO_IMG} alt="logo" />
            <span>Sacred Earth Cafe</span>
          </div>
        )}
        {hideNavItems ? (
          <button type="button" className="btn-light">
            <img src={CHAT_ICON} alt="chat_icon" />
          </button>
        ) : (
          <div className="button-section">
            <button type="button" className="btn-light">
              <img src={RECORD_VOICE_OVER} alt="record_voice_over" />
            </button>
            <button type="button" className="btn-light">
              <img src={HASH_TAG_ICON} alt="hash_tag_icon" />
            </button>
          </div>
        )}
      </div>
      {!hideNavItems && (
        <nav>
          <ul className="nav-items">
            {NAV_TABS.map(tab => (
              <li className="nav-item" key={tab.name}>
                <NavLink to={tab.link}>{tab.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
