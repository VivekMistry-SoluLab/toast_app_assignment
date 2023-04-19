import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ArrowUp } from '../../../assets/images/arrow_up.svg';
import { Card } from '../../../components';
import { CHOCOLATE_BOWL_IMG, SUNSET_BOWL_IMG } from '../../../assets/images';

import './Main.css';
import {
  addItemToCart,
  addQuantity,
  removeItemFromCart,
  removeQuantity,
} from '../../../store/actions';
import Layout from '../../Layout/Layout';

const CHOCOLATE_BOWL = [
  {
    id: 1,
    name: 'Chocolate Bowl',
    image: CHOCOLATE_BOWL_IMG,
    itemCount: 1,
    price: 299,
  },
  {
    id: 2,
    name: 'Double Chocolate Bowl',
    image: CHOCOLATE_BOWL_IMG,
    itemCount: 1,
    price: 399,
  },
  {
    id: 3,
    name: 'Fruit Chocolate Bowl',
    image: CHOCOLATE_BOWL_IMG,
    itemCount: 1,
    price: 359,
  },
];
const ACAI_BOWL = [
  {
    id: 4,
    name: ' Sunset Acai Bowl',
    image: SUNSET_BOWL_IMG,
    itemCount: 1,
    price: 259,
  },
  {
    id: 5,
    name: 'Sunset Acai Bowl with extra fruit',
    image: CHOCOLATE_BOWL_IMG,
    itemCount: 1,
    price: 399,
  },
];
const Main = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.items);

  const handleAddToCart = data => {
    dispatch(addItemToCart(data));
  };
  const handleAddQuantity = id => {
    dispatch(addQuantity(id));
  };
  const handleRemoveQuantity = id => {
    const item = cart.filter(x => x.id === id)[0];
    if (item.itemCount === 1) {
      dispatch(removeItemFromCart(id));
    } else {
      dispatch(removeQuantity(id));
    }
  };
  return (
    <Layout>
      <div className="main-container">
        <div className="main-items">
          <span> Acai Bowls</span>
          <hr />
          <ArrowUp />
        </div>
        <div className="row">
          {ACAI_BOWL.map(item => (
            <div className="col-12" key={item.id}>
              <Card
                item={item}
                isMainCard
                addToCart={handleAddToCart}
                addQuantity={handleAddQuantity}
                removeQuantity={handleRemoveQuantity}
              />
            </div>
          ))}
        </div>
        <div className="main-items">
          <span> Chocolate Bowls</span>
          <hr />
          <ArrowUp />
        </div>
        <div className="row">
          {CHOCOLATE_BOWL.map(item => (
            <div className="col-12" key={item.id}>
              <Card
                item={item}
                isMainCard
                addToCart={handleAddToCart}
                addQuantity={handleAddQuantity}
                removeQuantity={handleRemoveQuantity}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Main;
