// import React from 'react';
// import { Item } from './Item';

// export const ItemsList = ({items}) => {
// 	return <>
// 		{
// 			items.map((item, idx) => {
// 				return <Item item={item} key={idx} />
// 			})
// 		}
// 	</>
// } 

// module.exports = { ItemsList }
import React from 'react';
import { Item } from './Item';

export const ItemsList = ({ items }) => {
  return (
    <div className="main-container">
      <h1>Inventory</h1>
      <h2>All items</h2>
      <div className="grid-container">
        {items.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

module.exports = { ItemsList };