import React from "react";
import "./DisplayPots.css";

const DisplayPots = (props) => {
  return (
    <div className="Posts">
      <div>
        <h5>Created on: {props.create}</h5>
        <p>
          <b>Title : {props.title}</b>
        </p>
        <p>{props.description}</p>
        <button className="ReadMore" onClick={props.editPost}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default DisplayPots;
