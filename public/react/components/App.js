import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';
import { ItemDetails } from './ItemDetails';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	// const [sauces, setSauces] = useState([]);
	//intialized items state
	const [items, setItems] = useState([])
    const [clickItems, setClickItems] = useState(null);

//function for handling click on item card in home page
	// async function fetchSauces(){
	// 	try {
	// 		const response = await fetch(`${apiURL}/sauces`);
	// 		const saucesData = await response.json();
			
	// 		console.log(saucesData);
	// 		setSauces(saucesData)
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }

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

	// useEffect(() => {
	// 	fetchSauces();
	// }, []);

	useEffect(() => {
		fetchItems();
	 }, [])


	return (
		<main>	
      {/* <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<SaucesList sauces={sauces} /> */}

			
			{clickItems !== null ? <ItemDetails item={clickItems} setClickItems={setClickItems} setItems={setItems} items={items}/> : 
			<div>
			<h1>Inventory</h1>
			<h2>All items</h2>

			{/* button to add item */}
			<button>Add Item</button>
			<ItemsList item={clickItems} setClickItems={setClickItems} setItems={setItems} items={items}/>
			</div> }
			
		</main>
	)
}