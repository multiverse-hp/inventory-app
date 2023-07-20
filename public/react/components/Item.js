import React, { useState,useEffect } from 'react';
import apiURL from '../api';
import { items } from '../../../server/seedData';



export const Item = (props) => {

   function getItem(){
    props.setClickItems(props.item);
    console.log(props.item);
  }

  function addToCart(){
    props.setItemsInCart(props.itemsInCart+1)
  }

  return( 
    <>
    <div className='div-flex-contain'>
      <div className='image-container'>
    <img className='item-images'
    onClick={getItem} 
    src={props.item.image} alt={props.item.name} />
    </div>
    <button onClick={addToCart}>Add to Cart</button>
     <div className='descript-div'>
      <h3>Title: {props.item.title}</h3>
      <h3>Description: {props.item.description}</h3>
      <h3>Price: {props.item.price}</h3>
      <h3>Category: {props.item.category}</h3>
      </div>
      </div>
    </>
  
  )
}

module.exports = { Item }
