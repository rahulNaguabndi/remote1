import { useState } from "react";
export const Counter = ({ history }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      className="container"
      style={{
        alignItems: "center",
        margin: "auto",
        background: "green",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>{counter}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <button
            onClick={() => {
              setCounter((prevCount) => prevCount + 1);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setCounter((prevCount) => prevCount - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
