import React, { useState, useEffect } from "react";

function MealContainer(props) {
  useEffect(() => {
    console.log(props.meal.start, "start");
  }, []);

  return (
    <div
      style={{
        top: `${props.meal.start * 50}px`,
        height: `${props.meal.time * 50}px`,
      }}
      onClick={(e) => {
        console.log("click");
        props.dragElement(e);
      }}
      draggable={true}
      className="meal-container"
    >
      <div className="drag-handle">
        <p>{props.meal.title}</p>
      </div>
    </div>
  );
}

export default MealContainer;
