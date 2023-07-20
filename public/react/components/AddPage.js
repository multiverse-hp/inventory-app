import React, { useState,useEffect } from 'react';
import apiURL from '../api';



export const AddPage = ({setItems, setShowAddPage}) => {
    const [formData, setFormData] =useState({
        title:'',
        description: '',
        price : 0,
        category: "",
        image_url:""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${apiURL}/items/item`, {
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
    <div className='addPage-container'>
        <h1 className="text-center">Add Page</h1><br/>
        <form onSubmit={handleSubmit}>
          <div className='user-box'>
            <label>Title:</label>
            <input type="text" id="title" name="title" onChange={handleChange} value={formData.title} required />


            <label>Description:</label>
            <textarea id='addPage-textarea' rows='4' cols='50' 
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

            <label>Image</label>
            <input
            accept=".jpg,.jpeg,.png"
            id="fileInput"
            multiple
            type="file"
            style={{ display: "none"}}
            />


            <button type='submit'>
            <span></span>
      <span></span>
      <span></span>
      <span></span>
              Save Changes</button>
            </div>
        </form>
    </div>
    </>
  
  )
}

module.exports = { AddPage }
