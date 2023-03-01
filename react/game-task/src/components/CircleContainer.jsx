import "../App.css";
// import Circle from "./Circle";


const CircleContainer = (props) => {
  

  return (
    <>
      <div className="container">
        <div className="circle-container">
          {props.circle}        
        </div>
      </div>
    </>
  );
};

export default CircleContainer;
