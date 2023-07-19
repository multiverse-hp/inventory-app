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
        <img src={props.item.image} alt={props.item.name} />
          <div className='idh3-div'>
          <h3>Title: {props.item.title}</h3>
          <h3>Description: {props.item.description}</h3>
          <h3>Price: {props.item.price}</h3>
          <h3>Category: {props.item.category}</h3>
          </div>
        </div>

        <div className='idh3-btn-div'>
        <button onClick={() => props.setClickItems(null)}>Back to Inventory</button>
        <button onClick={() => deleteItem(props.item.id)}>Delete Item</button>
        </div>
        </> )
}


