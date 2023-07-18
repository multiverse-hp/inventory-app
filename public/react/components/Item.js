import React, { useState,useEffect } from 'react';
import apiURL from '../api';

export const Item = (props) => {

   function getItem(){
    // let itemData = await fetch(`${apiURL}/items/${props.item.id}`)
    // let item = await itemData.json()
    // props.setClickItems(item);
    props.setClickItems(props.item);

  }
  return( 
  <div className = 'item'>
    <h3>{props.item.title}</h3>
    <h3>{props.item.description}</h3>
    <h3>{props.item.price}</h3>
    <h3>{props.item.category}</h3>
    <img 
    onClick={getItem} 
    src={props.item.image} alt={props.item.name} />
  </div>
  )
}

module.exports = { Item }
