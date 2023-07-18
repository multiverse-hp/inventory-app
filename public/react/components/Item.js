import React, { useState,useEffect } from 'react';
import apiURL from '../api';

// import '../../../public/style.css'


export const Item = (props) => {

   function getItem(){
    // let itemData = await fetch(`${apiURL}/items/${props.item.id}`)
    // let item = await itemData.json()
    // props.setClickItems(item);
    props.setClickItems(props.item);

  }

  return( 
    <>
    <img 
    onClick={getItem} 
    src={props.item.image} alt={props.item.name} />
     <div className='descript-div'>
      <h3>Title: {props.item.title}</h3>
      <h3>Description: {props.item.description}</h3>
      <h3>Price: {props.item.price}</h3>
      <h3>Category: {props.item.category}</h3>
      </div>
    </>
  
  )
}

module.exports = { Item }
