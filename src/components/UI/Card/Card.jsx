import React from 'react';
import './Card.css';
import { PLUS_ICON, VEG_ICON } from '../../../assets/images';

const Card = props => {
  const { item } = props;
  return (
    <div className="card-section">
      <div className="image-section">
        <img src={item?.image} alt={item?.name} />
      </div>
      <div className="description-section">
        <span className="item-name">
          <img src={VEG_ICON} alt="veg" />
          {item?.name}
        </span>
        <div className="price-section">
          <div className="price">₹ {item?.price}</div>
          <button type="button" className="add-button">
            <img src={PLUS_ICON} alt="plus-icon" /> <span>ADD</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
