import React, {useEffect} from 'react';
import { useState, useEffect} from 'react';
import apiURL from '../api';

export const ItemDetails = (props) => {
  const [formData, setFormData] = useState({
    title: props.item.title,
    description: props.item.description,
    price: props.item.price,
    category: props.item.category,
    image: props.item.image
  });
  const [editButton, setEditButton] = useState(null)
  //Update Item Logic
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //delete item logic
  let deleteItem = async() => {
    fetch(`${apiURL}/items/${props.item.id}`, {
       method: "DELETE"
   })
 
   props.setClickItems(null);
   let id = props.item.id
   props.setItems(props.items.filter((item) => item.id !== id));
 }
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/items/${props.item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const updatedItem = await response.json();
        props.setItems((prevItems) =>
          prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
        props.setClickItems(null);
      } else {
        console.log('Failed to update item:', response.status);
      }
    } catch (error) {
      console.log('Error updating item:', error);
    }
  };

  const handleEditClick = () => {
    console.log("PRessed Edit Button")
    editButton  == null ? setEditButton(true) : setEditButton(null) 
    console.log("Edit Button State: ", editButton)
  }
  
  return (
    <>
    <div className='itemDetail-main-container'>
    <div className="item">
        <img src={props.item.image} alt={props.item.name} />
        <div className='h3-clickItem-div'>
          {/* put the h3 inside here */}
        <h3>{props.item.title}</h3>
        <h3>{props.item.description}</h3>
        <h3>{props.item.price}</h3>
        <h3>{props.item.category}</h3>
        </div>
      </div>
    {/* {editButton == null ?  */}
    
      
      <div>
      </div>

      <div className='idh3-btn-div'>
        <button onClick={() => props.setClickItems(null)}>Back to Inventory</button>
        <button onClick={deleteItem}>Delete Item</button>
        <button onClick={() => editButton  == null ? setEditButton(true) : setEditButton(null)}>Edit item</button>
        </div>
        </div>
        
        <div onSubmit={handleUpdate} className={editButton ? 'form-div' : 'hidden'}>
          <h3>Update form</h3>
      <form onSubmit={handleUpdate} className={editButton ? 'editModal' : 'hidden'}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Update Item</button>
      </form>
      </div>
        </>
  )
}
