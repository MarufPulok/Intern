// Box.js
import React from 'react';
import "../App.css"

const Box = ({ name, age }) => {
  return (
    <div className="box">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Box;
