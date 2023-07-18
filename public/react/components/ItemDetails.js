import React from 'react';
import { useState, useEffect} from 'react';
import apiURL from '../api';

export const ItemDetails = (props) => {

  //delete item logic
  let deleteItem = async(id) => {
    let itemData = await fetch(`${apiURL}/wiki/${id}`, {
      method: "DELETE",
  });

  let item = await itemData.json();

  props.setClickItems(null);
  props.setItems(props.items.filter((item) => item.id !== id));
}

    return(<>
        <div className = 'item'>
          <h3>{props.item.title}</h3>
          <h3>{props.item.description}</h3>
          <h3>{props.item.price}</h3>
          <h3>{props.item.category}</h3>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <button onClick={() => props.setClickItems(null)}>Back to Inventory</button>
        <button onClick={() => deleteItem(props.item.id)}>Delete Item</button>
        </> )
}


