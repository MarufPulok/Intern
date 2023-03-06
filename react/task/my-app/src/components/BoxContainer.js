// BoxContainer.js
import React, { useState } from 'react';
import Box from './Box';
import '../App.css';

const BoxContainer = () => {
  const [boxes, setBoxes] = useState([
    { name: 'Pedro', age: 25 },
    { name: 'Juan', age: 30 },
    { name: 'Maria', age: 20 },
    { name: 'Jose', age: 35 },
    { name: 'Luis', age: 40 },
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBoxes([...boxes, { name, age }]);
    setName('');
    setAge('');
  };

  return (
    <div>
      {boxes.map((box, index) => (
        <Box key={index} name={box.name} age={box.age} />
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" value={age} onChange={handleAgeChange} />
        <button type="submit">Add Box</button>
      </form>
    </div>
  );
};

export default BoxContainer;
