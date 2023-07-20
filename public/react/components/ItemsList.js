import React from 'react';
import { Item } from './Item';

export const ItemsList = ({ items, setClickItems }) => {
  return (
    <div className="main-container">
      <div className="grid-container">
        {items.map((item, idx) => (
          <Item item={item} setClickItems={setClickItems} key={idx} />
        ))}
      </div>
      
    </div>
  );
};

module.exports = { ItemsList };


