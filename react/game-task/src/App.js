import './App.css';
import GameTitle from './components/GameTitle';
import CircleContainer from './components/CircleContainer';
// import Circle from './components/Circle';

function App() {
  let level = 1;
  localStorage.setItem("level", level);

  return (
    <div className="App">
      <GameTitle/>
      <CircleContainer/>
    </div>
  );
}

export default App;
