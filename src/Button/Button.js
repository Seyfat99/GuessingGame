import React from "react";

const button = (props) => {
  return (
    <div className="button-container">
      <p className="paraGraph
      paraGraph--width">1 - 10</p>
      <button onClick={props.clickedStand}>Standard</button>
      <button onClick={props.clickedExp}>Expert</button>
      <p className="paraGraph
      paraGraph--width">1 - 100</p>
    </div>
  );
};

export default button;
