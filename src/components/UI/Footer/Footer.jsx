import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { BOLT_ICON, BOOK_ICON, CART_ICON } from '../../../assets/images';

const FOOTER_TABS = [
  {
    name: 'Store',
    image: BOLT_ICON,
    link: '/store',
  },
  {
    name: 'Special',
    image: BOOK_ICON,
    link: '/special',
  },
  {
    name: 'Cart',
    image: CART_ICON,
    link: '/cart',
  },
];
// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <footer>
      <div>
        <button type="button" className="menu-btn">
          Menu
        </button>
      </div>
      <ul className="button-section">
        {FOOTER_TABS.map(tab => (
          <li key={tab.name}>
            <NavLink to={tab.link} className="footer-nav-item">
              <button type="button" className="btn-light">
                <img src={tab.image} alt={tab.name} />
              </button>
            </NavLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
