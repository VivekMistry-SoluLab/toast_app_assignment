import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BOLT_ICON, BOOK_ICON, CART_ICON } from '../../../assets/images';
import './Footer.css';

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

const Footer = () => {
  const { cart } = useSelector(state => state.items);
  return (
    <footer>
      <div>
        <button type="button" className="menu-btn">
          Menu
        </button>
      </div>
      <ul className="button-section">
        {FOOTER_TABS.map(tab => (
          <li key={tab.name} className={tab.name === 'Cart' && 'position-relative'}>
            {tab.name === 'Cart' && <span className="item-count">{cart?.length}</span>}
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
