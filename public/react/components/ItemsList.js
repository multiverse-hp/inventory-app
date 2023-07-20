import React from 'react';
import { Item } from './Item';

export const ItemsList = ({ items, setClickItems, setItemsInCart, itemsInCart }) => {
  return (
    <div className="main-container">
      <div className="grid-container">
        {items.map((item, idx) => (
          <Item item={item} setClickItems={setClickItems} key={idx} setItemsInCart={setItemsInCart} itemsInCart={itemsInCart}/>
        ))}
      </div>
      
    </div>
  );
};

module.exports = { ItemsList };


