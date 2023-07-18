import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';
<<<<<<< HEAD
import { ItemDetails } from './ItemDetails';

=======
>>>>>>> 88292c06b693173254fa9e8828d9976455f9cf08
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	//intialized items state
	const [items, setItems] = useState([])
    const [clickItems, setClickItems] = useState(null);

	const [items, setItems ] = useState([]);

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			console.log(saucesData);
			setSauces(saucesData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

<<<<<<< HEAD
	//fetch items function
	async function fetchItems(){
		try {
			//might need to change fetch link !!
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

=======
	async function fetchItems(){
		try{
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json()
			setItemss(itemsData);

		} catch (err){
			console.error('Error fetching Items', err);
		}
	}

>>>>>>> 88292c06b693173254fa9e8828d9976455f9cf08
	useEffect(() => {
		fetchItems();
	 }, [])


	return (
		<main>	
      {/* <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
<<<<<<< HEAD
			<SaucesList sauces={sauces} /> */}

			
			{clickItems !== null ? <ItemDetails /> : <div>
			<h1>Inventory</h1>
			<h2>All items</h2>
			{/* button to add item */}
			<button>Add Item</button>
			<ItemsList item={clickItems} setClickItems={setClickItems} setItems={setItems} items={items}/>
			{/* <Item item={itemData} setClickItems = {setClick}/> */}
			</div> }
			
=======
			<SaucesList sauces={sauces} />

			<h1>Inventory</h1>
			<ItemsList items={items} />
>>>>>>> 88292c06b693173254fa9e8828d9976455f9cf08
		</main>
	)
}