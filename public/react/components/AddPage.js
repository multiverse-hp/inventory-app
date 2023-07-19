import React, { useState,useEffect } from 'react';
import apiURL from '../api';

// import '../../../public/style.css'


export const AddPage = (props) => {

  
  

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
            <textarea rows='4' cols='50' placeholder='Enter category here...' required></textarea>


            <label>Price:</label>
            <input type='number' min= "0" step=".01"></input>

            <button type='submit'>Save Changes</button>

        </form>
    </div>
    </>
  
  )
}

module.exports = { Item }
