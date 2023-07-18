import React from 'react';

export const Sauce = (props) => {

  return <>
    <h3>{props.sauce.title}</h3>
    <img src={props.sauce.image} alt={props.sauce.title} />
  </>
} 
	