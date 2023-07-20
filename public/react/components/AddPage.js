import React, { useState,useEffect } from 'react';
import apiURL from '../api';



export const AddPage = ({setItems, setShowAddPage}) => {
    const [formData, setFormData] =useState({
        title:'',
        description: '',
        category: "",
        price : 0,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${apiURL}/items`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              // Item added successfully, fetch the updated list of items
              const itemsResponse = await fetch(`${apiURL}/items`);
              const itemsData = await itemsResponse.json();
              setItems(itemsData);
              setShowAddPage(false); // Go back to the main page after adding an item
            } else {
              console.error('Failed to add item:', response.status, response.statusText);
            }
          } catch (error) {
            console.error('Failed to add item:', error);
          }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
  return( 
    <>
    <div>
        <h1 className="text-center">Add Page</h1><br/>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" id="title" name="title" onChange={handleChange} value={formData.title} required />


            <label>Description:</label>
            <textarea rows='4' cols='50' 
            placeholder='Enter description here...' 
            onChange={handleChange}
            name="description"
            value={formData.description} 
            required>

            </textarea>


            <label>Category:</label>
            <select name="category" onChange={handleChange} value={formData.category} required>
                <option value="">Select Category...</option>
                <option value="Men's Clothing">Men's Clothing</option>
                <option value="Women's clothing">Women's clothing</option>
                <option value="Jewelery">Jewelery</option>
                <option value="Electronics">Electronics</option>
            </select>


            <label>Price:</label>
            <input type='number' min= "0" step=".01" name="price" onChange={handleChange} value={formData.price}></input>

            <button type='submit'>Save Changes</button>

        </form>
    </div>
    </>
  
  )
}

module.exports = { AddPage }
