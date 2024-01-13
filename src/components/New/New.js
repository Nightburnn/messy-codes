import React from 'react'
import new_collection from './new_collection';
import Item from '../Item/Item'
import './New.css'
const New = () => {
    return (
      <div className='new'>
        <h1>New Collection</h1>
        <hr />
        <div className='collections'>
          {new_collection.map((item, i) => (
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
  

export default New