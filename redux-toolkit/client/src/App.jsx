import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './features/itemsSlice';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const items = useSelector((state) => state.items);
  // const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    dispatch(addItem(inputValue));
    setInputValue('');
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <div className="shopping-list-container">
      <h1 className="shopping-list-title">Shopping List App</h1>
      <div className="input-container">
        <input className="input-field" type="text" value={inputValue} onChange={handleInputChange} />
        <button className="add-item-btn" onClick={handleAddItem}>Add Item</button>
      </div>
        <ItemList className="item-list" items={items} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
