import React from 'react';
import { Item } from './Item';

<<<<<<< HEAD
export const ItemsList = ({items, setClickItems}) => {

	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} setClickItems={setClickItems} />
=======
export const ItemsList = ({items}) => {
	return <>
		{
			items.map((item, index) => {
				return <Item item={item} key={index} />
>>>>>>> 88292c06b693173254fa9e8828d9976455f9cf08
			})
		}
	</>
} 
<<<<<<< HEAD

module.exports = { ItemsList }
=======
>>>>>>> 88292c06b693173254fa9e8828d9976455f9cf08
