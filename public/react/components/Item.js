import React from 'react';
import apiURL from '../api';
import '../../../public/style.css'

export const Item = (props) => {

  // async function getItem(){
  //   let itemData = await fetch(`${apiURL}/items/${props.item.id}`)
  //   let item = await itemData.json()
  //   props.setItems(item)
  // }


  return( 
    <>
  {/* <div className='item1-div'> */}
   
   {/* <div className='grid-container'> */}
    <img className='item-image'
    // onClick={getItem} 
    onClick={async () => {
      try {
        const response = await fetch(`${apiURL}/items/${props.item.id}`);
        const itemData = await response.json();
        console.log(itemData.description);
        setItemDescription(itemData.description);
        setShowDescription(true);
      } catch (err) {
        console.log("Oh no an error!", err);
      }
    }}
    src={props.item.image} alt={props.item.name} />
     <div className='descript-div'>
      <h3>Title: {props.item.title}</h3>
      <h3>Description: {props.item.description}</h3>
      <h3>Price: {props.item.price}</h3>
      <h3>Category: {props.item.category}</h3>
      </div>
    {/* </div> */}
  {/* </div> */}
</>
  
  )
}

module.exports = { Item }