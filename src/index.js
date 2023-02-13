import React, { useState } from "react";
import ReactDOM from "react-dom";

// write your Color component here
const Color = (props) => {
  let isSelected = props.color === props.selectedColor;
  console.log(isSelected, "isSelected bool");
  let selectedClass = isSelected ? "selected" : "";
  console.log(selectedClass, "selectedClass ");
  return (
    <div
      className={`${props.color} ${selectedClass}`}
      onClick={() => {
        props.selectColor(props.color);
      }}
    ></div>
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  let selectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          selectedColor={selectedColor}
          selectColor={selectColor}
          color="violet"
        />
        <Color
          selectedColor={selectedColor}
          selectColor={selectColor}
          color="red"
        />
        <Color
          selectedColor={selectedColor}
          selectColor={selectColor}
          color="blue"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Picker />, document.getElementById("app"));
