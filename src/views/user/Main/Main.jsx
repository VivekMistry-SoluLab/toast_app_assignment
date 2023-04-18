import React from 'react';

import { ReactComponent as ArrowUp } from '../../../assets/images/arrow_up.svg';
import { Card } from '../../../components';
import { CHOCOLATE_BOWL_IMG, SUNSET_BOWL_IMG } from '../../../assets/images';

import './Main.css';

const CHOCOLATE_BOWL = [
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
];
const ACAI_BOWL = [
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
const Main = () => (
  <div className="main-container">
    <div className="main-items">
      <span> Acai Bowls</span>
      <hr />
      <ArrowUp />
    </div>
    <div className="row">
      {ACAI_BOWL.map(item => (
        <div className="col-12" key={item.id}>
          <Card item={item} isMainCard />
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
          <Card item={item} isMainCard />
        </div>
      ))}
    </div>
  </div>
);

export default Main;
