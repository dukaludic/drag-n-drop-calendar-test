import React from "react";
import MealContainer from "./MealContainer";

function CalendarColumn(props) {
  console.log(props, "props");
  return (
    <div className="calendar-column-container">
      {props.meals?.map((meal) => {
        return (
          <MealContainer
            droppable
            dragElement={props.dragElement}
            meal={meal}
          />
        );
      })}
    </div>
  );
}

export default CalendarColumn;
