import React from 'react';
import { VEG_ICON } from '../../../assets/images';
import AddRemoveButton from '../../../components/AddRemoveButton/AddRemoveButton';

const OrdersSection = props => {
  const { data, addQuantity, removeQuantity } = props;

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
            <AddRemoveButton
              handleAddClick={() => addQuantity(item.id)}
              handleRemoveClick={() => removeQuantity(item.id)}
              count={item?.itemCount}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersSection;
