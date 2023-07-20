import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemDetails } from './ItemDetails';
import { AddPage } from './AddPage';
 
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	//intialized items state
	const [items, setItems] = useState([])
    const [clickItems, setClickItems] = useState(null);
	const [ showAddPage, setShowAddPage ] = useState(false);


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
			<button onClick={handleAddItemClick}>Add Item</button>
			
			<ItemsList item={clickItems} setClickItems={setClickItems} setItems={setItems} items={items}/>
			</div> )}
			
		</main>
	)
}	

  
  