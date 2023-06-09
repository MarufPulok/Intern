// import { React, useState } from "react";
import PropsDemo from "./PropsDemo";
import "./hello.css";

export default function Hello({ count, onClick }) {
  // const [count, setCount] = useState(0);
  const user = {
    userName: "Suleman",
    userImg:
      "data:image/jpeg;base64,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",
  };

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <div className="demo">
        <h1>Hello {user.userName}</h1>
        <img className="userImg" src={user.userImg} alt="" />
        {count === 0 ? (
          <button className="btn" onClick={onClick}>
            Click me
          </button>
        ) : (
          <button className="btn" onClick={onClick}>
            You clicked {count} times
          </button>
        )}
      </div>

      <PropsDemo name = "Cdi"/>
    </>
  );
}
