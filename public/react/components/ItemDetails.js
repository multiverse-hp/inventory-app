import React, {useEffect} from 'react';
import { useState, useEffect} from 'react';
import apiURL from '../api';

export const ItemDetails = (props) => {

  //delete item logic
  let deleteItem = async() => {
   fetch(`${apiURL}/items/${props.item.id}`, {
      method: "DELETE"
  })

  props.setClickItems(null);
  let id = props.item.id
  props.setItems(props.items.filter((item) => item.id !== id));
}

    return(<>
        <div className = 'item'>
          <h3>Title: {props.item.title}</h3>
          <h3>Description: {props.item.description}</h3>
          <h3>Price: {props.item.price}</h3>
          <h3>Category: {props.item.category}</h3>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <button onClick={() => props.setClickItems(null)}>Back to Inventory</button>
        <button onClick={deleteItem}>Delete Item</button>
        <button>Edit item</button>
        </> )
}


