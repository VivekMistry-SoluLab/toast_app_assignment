import React from 'react';
import { useSelector } from 'react-redux';
import './Card.css';
import { PLUS_ICON, VEG_ICON } from '../../../assets/images';
import AddRemoveButton from '../../AddRemoveButton/AddRemoveButton';

const Card = props => {
  const { item, isMainCard, addToCart, addQuantity, removeQuantity } = props;
  const { cart } = useSelector(state => state.items);

  const cartItem = cart.filter(x => x.id === item.id);

  return (
    <div className={`card-section ${isMainCard ? 'no-wrap' : 'wrap'}`}>
      <div className={isMainCard ? 'main-card-image-section' : 'image-section'}>
        <img src={item?.image} alt={item?.name} />
      </div>
      <div className="description-section">
        <span className="item-name">
          <img src={VEG_ICON} alt="veg" />
          {item?.name}
        </span>
        <div className="price-section">
          <div className="price">₹ {item?.price}</div>
          {cartItem.length > 0 ? (
            <AddRemoveButton
              handleAddClick={() => addQuantity(item.id)}
              handleRemoveClick={() => removeQuantity(item.id)}
              count={cartItem?.[0]?.itemCount}
            />
          ) : (
            <button type="button" className="add-button" onClick={() => addToCart(item)}>
              <img src={PLUS_ICON} alt="plus-icon" /> <span>ADD</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
