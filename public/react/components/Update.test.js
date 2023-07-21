import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ItemDetails } from './ItemDetails';


describe('ItemDetails', () => {
  test('should update item on form submission', async () => {
    // props for the component
    const item = {
      title: 'Sample Title',
      description: 'Sample Description',
      price: 100,
      category: 'Sample Category',
      image: 'https://www.pakainfo.com/image-url-for-testing/',
    };

    const setClickItems = jest.fn();
    const setItems = jest.fn();

    // Render the component with data
    const { getByText, getByPlaceholderText } = render(
      <ItemDetails item={item} setClickItems={setClickItems} setItems={setItems} />
    );

    // Find and click button
    const editButton = getByText('Edit item');
    fireEvent.click(editButton);

    // Find the input fields and update their values
    const titleInput = getByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'New Title' } });

    const descriptionInput = getByPlaceholderText('Description');
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });

    const priceInput = getByPlaceholderText('Price');
    fireEvent.change(priceInput, { target: { value: '200' } });

    const categoryInput = getByPlaceholderText('Category');
    fireEvent.change(categoryInput, { target: { value: 'New Category' } });

    const imageInput = getByPlaceholderText('Image URL');
    fireEvent.change(imageInput, { target: { value: 'https://www.pakainfo.com/image-url-for-testing/' } })
    // Find and click the "Update Item" button
    const updateButton = getByText('Update Item');
    //fireEvent.click(updateButton);
    
    // Wait for the asynchronous update to complete
    await waitFor(() => {
        //const new_category = document.getByLabel("category").value;
        const NewcategoryInput = getByPlaceholderText('Category');
      expect(NewcategoryInput.value).toBe('New Category')
          
    });
  });
});
