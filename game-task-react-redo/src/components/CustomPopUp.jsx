import "../App.css"

const PopUp = (props) => {
    let text = props.text;


  return (
    <div className="pop-up">
      <div className="pop-up-content">
        <h1 className="pop-up-title">{text}</h1>


        <button className="pop-up-btn" onClick={props.onClick}>Play Again</button>
      </div>
    </div>
  );
};

export default PopUp;
