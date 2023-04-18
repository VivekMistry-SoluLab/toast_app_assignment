import React from 'react';
import './Special.css';
import { ReactComponent as Banner } from '../../../assets/images/banner.svg';
import { ReactComponent as ArrowUp } from '../../../assets/images/arrow_up.svg';
import { Card } from '../../../components';
import { CHOCOLATE_BOWL_IMG, SUNSET_BOWL_IMG } from '../../../assets/images';

const FOOD_ITEMS = [
  {
    id: 1,
    name: 'Chocolate Bowl',
    image: CHOCOLATE_BOWL_IMG,
    price: 299,
  },
  {
    id: 2,
    name: 'Double Chocolate Bowl',
    image: CHOCOLATE_BOWL_IMG,
    price: 399,
  },
  {
    id: 3,
    name: 'Fruit Chocolate Bowl',
    image: CHOCOLATE_BOWL_IMG,
    price: 359,
  },
  {
    id: 4,
    name: ' Sunset Acai Bowl',
    image: SUNSET_BOWL_IMG,
    price: 259,
  },
  {
    id: 5,
    name: 'Sunset Acai Bowl with extra fruit',
    image: CHOCOLATE_BOWL_IMG,
    price: 399,
  },
];
// eslint-disable-next-line arrow-body-style
const HomePage = () => {
  return (
    <div className="special-container">
      <div className="banner-section">
        <Banner />
        <span className="banner-text">Welcome to Sacred Earth Cafe</span>
      </div>
      <div className="special-items">
        <span> Today&apos;s Spacial</span>
        <hr />
        <ArrowUp />
      </div>
      <div className="row">
        {FOOD_ITEMS.map(item => (
          <div className="col-6" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
