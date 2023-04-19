import React from 'react';

import { ReactComponent as ArrowUp } from '../../../assets/images/arrow_up.svg';
import './Cart.css';
import OrdersSection from './OrdersSection';
import { ARROW_RIGHT_ICON } from '../../../assets/images';

const CURRENT_ORDER = [
  {
    id: 1,
    name: 'Chocolate Bowl',
    itemCount: 2,
    price: 299,
  },
  {
    id: 2,
    name: 'Double Chocolate Bowl',
    itemCount: 2,
    price: 399,
  },
  {
    id: 3,
    name: 'Fruit Chocolate Bowl',
    itemCount: 1,
    price: 359,
  },
];

const PREVIOUS_ORDER = [
  {
    id: 1,
    name: 'Chocolate Bowl',
    itemCount: 2,
    price: 299,
  },
  {
    id: 2,
    name: 'Double Chocolate Bowl',
    itemCount: 1,
    price: 399,
  },
];
// eslint-disable-next-line arrow-body-style
const Cart = () => {
  return (
    <div className="cart-container">
      <div>
        <div className="cart-section">
          <span> Current Order</span>
          <hr />
          <ArrowUp />
        </div>
        <OrdersSection data={CURRENT_ORDER} />
        <div className="cart-section">
          <span> Previous Order</span>
          <hr />
          <ArrowUp />
        </div>
        <OrdersSection data={PREVIOUS_ORDER} />
      </div>
      <div className="footer-card">
        <span>1 Items</span>
        <span className="d-flex align-items-center">
          <span>PLACE ORDER</span>
          <button type="button" className="place-order-btn">
            <img src={ARROW_RIGHT_ICON} alt="right-arrow" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
