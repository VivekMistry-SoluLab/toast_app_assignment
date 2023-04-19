import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { ReactComponent as ArrowUp } from '../../../assets/images/arrow_up.svg';
import OrdersSection from './OrdersSection';
import { ARROW_RIGHT_ICON } from '../../../assets/images';
import {
  addItemToPreviousOrder,
  addQuantity,
  removeItemFromCart,
  removeQuantity,
} from '../../../store/actions';
import Layout from '../../Layout/Layout';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart, previousOrder } = useSelector(state => state.items);

  const handleAddQuantity = id => {
    dispatch(addQuantity(id));
  };
  const handleRemoveQuantity = id => {
    const item = cart.filter(x => x.id === id)[0];
    if (item?.itemCount === 1) {
      dispatch(removeItemFromCart(id));
    } else {
      dispatch(removeQuantity(id));
    }
  };

  const handlePlaceOrder = () => {
    dispatch(addItemToPreviousOrder(cart));
    history.push('/special');
  };
  return (
    <Layout isCartScreen>
      <div className="cart-container">
        <div>
          <div className="cart-section">
            <span> Current Order</span>
            <hr />
            <ArrowUp />
          </div>
          {cart?.length > 0 && (
            <OrdersSection
              data={cart}
              addQuantity={handleAddQuantity}
              removeQuantity={handleRemoveQuantity}
              cart={cart}
            />
          )}
          <div className="cart-section">
            <span> Previous Order</span>
            <hr />
            <ArrowUp />
          </div>
          {previousOrder?.length > 0 && (
            <OrdersSection
              data={previousOrder}
              addQuantity={handleAddQuantity}
              removeQuantity={handleRemoveQuantity}
              cart={cart}
            />
          )}
        </div>
        <div className="footer-card">
          <span>{cart?.length} Items</span>
          <span className="d-flex align-items-center">
            <span>PLACE ORDER</span>
            <button
              type="button"
              className="place-order-btn"
              disabled={!cart?.length}
              onClick={handlePlaceOrder}
            >
              <img src={ARROW_RIGHT_ICON} alt="right-arrow" />
            </button>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
