import React, { useState,useEffect } from 'react';
import apiURL from '../api';



export const Cart = (props) => {
    
    return(
        <>
        <button onClick={()=> {props.setViewCart(false)}}>Close Cart</button>
        <h2>Hello</h2>
        </>
    )

}