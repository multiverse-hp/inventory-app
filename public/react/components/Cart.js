import React, { useState,useEffect } from 'react';
import apiURL from '../api';
import { Item } from './Item';


export const Cart = (props) => {

    return(
        <>
        <button onClick={()=> {props.setViewCart(false)}}>Close Cart</button>
        {props.showItemsInCart.map((item, idx) => (
          <Item setShowItemsInCart={setShowItemsInCart} showItemsInCart={showItemsInCart} item={item} setClickItems={setClickItems} key={idx} setItemsInCart={setItemsInCart} itemsInCart={itemsInCart}/>
        ))}
        </>
    )

}