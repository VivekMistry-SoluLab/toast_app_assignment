import React from 'react';
import { MINUS_ICON, PLUS_ICON, VEG_ICON } from '../../../assets/images';

const OrdersSection = props => {
  const { data } = props;
  return (
    <div className="orders-section">
      {data.map(item => (
        <div className="order-item">
          <div className="item-description" key={item.id}>
            <div className="d-flex align-items-center">
              <img src={VEG_ICON} alt="veg-item" />
              <div className="ml-3">
                <span className="item-name">{item.name}</span>
                <div className="price-section">
                  <div className="price">₹ {item.price}</div>
                </div>
              </div>
            </div>
            <div className="add-remove-btn-section">
              <button type="button" className="text-btn">
                <img src={MINUS_ICON} alt="plus-icon" />
              </button>
              <span>{item.itemCount}</span>
              <button type="button" className="text-btn">
                <img src={PLUS_ICON} alt="plus-icon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersSection;
