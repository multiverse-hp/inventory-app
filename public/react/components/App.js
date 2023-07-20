import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemDetails } from './ItemDetails';
import { AddPage } from './AddPage';
import { Cart } from './Cart';
 
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	//intialized items state
	const [items, setItems] = useState([])
    const [clickItems, setClickItems] = useState(null);
	const [ showAddPage, setShowAddPage ] = useState(false);
	const [ itemsInCart, setItemsInCart ] = useState(0)
	const [viewCart, setViewCart ] = useState(false)


	//fetch items function
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			console.log(itemsData);
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const handleAddItemClick = () =>{
		setShowAddPage(true);
	};
	const showCart = ()=>{
		setViewCart(true)
	}

	useEffect(() => {
		fetchItems();
	 }, [])


	return (
		<main>	
			{showAddPage ? ( 
				<AddPage setItems={setItems} setShowAddPage={setShowAddPage} items={items}/> 
				) : clickItems !== null ? (
				<ItemDetails item={clickItems} setClickItems={setClickItems} setItems={setItems} items={items}/> 
				) : (
			<div>
			<h1>Inventory</h1>
			<h2>All items</h2>
			{viewCart ? <Cart  itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} viewCart={viewCart} setViewCart={setViewCart} item={clickItems} setClickItems={setClickItems} setItems={setItems} items={items}/>
			: <div className='cart'><h2 onClick={showCart}>Cart</h2>
			<p>{itemsInCart}</p>
			</div>
			}
			<button onClick={handleAddItemClick}>Add Item</button>
			
			<ItemsList item={clickItems} setClickItems={setClickItems} setItems={setItems} items={items} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
			</div> )}
			
		</main>
	)
}	

  
  