import "./circle-container.css";


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
