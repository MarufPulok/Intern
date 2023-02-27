// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Demo from './components/Demo';
import Products from './components/Products';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  }

  if (true) {
    return (
      <>
        <Hello/>
        <Products/>
        <Hello count={count} onClick={handleClick}/>
        <Hello count={count} onClick={handleClick}/>
      </>
    )
  } else
  return <Demo/>
}

export default App;
