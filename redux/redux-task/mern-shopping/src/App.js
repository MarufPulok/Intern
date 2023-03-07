import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from './features/itemsSlice';
import ItemList from './components/ItemList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

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
    <div>
      <h1>Shopping List App</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <ItemList items={items} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
