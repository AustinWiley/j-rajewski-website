import React from "react";

//this component creates a slide for each image
function Slide(props) {
  return (
    <>
      <div className="mySlides" style={props.style}>
        <img src={props.image} alt="" />
        <div className="numbertext">{props.slideNumber}</div>
        <div className="text">{props.caption}</div>
      </div>
      <div>{props.caption}</div>
    </>
  );
}

export default Slide;