// Popular.js
import React from 'react';
import Item from '../Item/Item';
import data_product from '../../assets/data_ids';
import './Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item, i) => (
          <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.imageSrc}
          newPrice={item.newPrice}
          oldPrice={item.oldPrice}
        />
        ))}
      </div>
    </div>
  );
};

export default Popular;
