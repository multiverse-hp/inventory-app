import React, { useState,useEffect } from 'react';
import apiURL from '../api';

// import '../../../public/style.css'


export const AddPage = ({setItems, setShowAddPage}) => {
    const [formData, setFormData] =useState({
        title:'',
        description: '',
        category: "",
        price : 0,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
    }
  return( 
    <>
    <div>
        <h1 className="text-center">Add Page</h1><br/>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type='text' id='title' name='title'></input>

            <label>Description:</label>
            <textarea rows='4' cols='50' placeholder='Enter description here...' required></textarea>


            <label>Category:</label>
            <select>
                <option value="">Select Category...</option>
                <option value="Men's Clothing">Men's Clothing</option>
                <option value="Women's clothing">Women's clothing</option>
                <option value="Jewelery">Jewelery</option>
                <option value="Electronics">Electronics</option>
            </select>


            <label>Price:</label>
            <input type='number' min= "0" step=".01"></input>

            <button type='submit'>Save Changes</button>

        </form>
    </div>
    </>
  
  )
}

module.exports = { AddPage }
