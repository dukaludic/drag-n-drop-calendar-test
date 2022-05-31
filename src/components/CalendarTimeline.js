import React, { useState, useEffect } from "react";
import CalendarColumn from "./CalendarColumn";

function CalendarTimeline() {
  const [columnOne, setColumnOne] = useState([
    { id: 1, title: "Kobasice", time: 2, start: 1 },
    { id: 1, title: "Pecenje", time: 6, start: 5 },
  ]);
  const [columnTwo, setColumnTwo] = useState([]);
  const [columnThree, setColumnThree] = useState([]);

  useEffect(() => {
    // setColumnOne(prevState =>)
  }, []);

  const dragElement = (e) => {
    console.log("drag started");
    let verticalDirection = 0;
    let mouseY = 0;
    // let mouseX = 0;

    const onDragStart = () => {
      verticalDirection = 0;
      mouseY = 0;
    };

    console.log(mouseY);
  };

  return (
    <div className="calendar-timeline-container">
      <div className="timeline">
        <span>00:00</span>
        <span>01:00</span>
        <span>02:00</span>
        <span>03:00</span>
        <span>04:00</span>
        <span>05:00</span>
        <span>06:00</span>
        <span>07:00</span>
        <span>08:00</span>
        <span>09:00</span>
        <span>10:00</span>
        <span>11:00</span>
        <span>12:00</span>
        <span>13:00</span>
        <span>14:00</span>
        <span>15:00</span>
        <span>16:00</span>
        <span>17:00</span>
        <span>18:00</span>
        <span>19:00</span>
        <span>20:00</span>
        <span>21:00</span>
        <span>22:00</span>
        <span>23:00</span>
      </div>
      {console.log(columnOne)}
      <CalendarColumn
        onDragOver={(e) => {
          console.log("dragging");
        }}
        dragElement={dragElement}
        meals={columnOne}
      />
      <CalendarColumn meals={columnTwo} />
      <CalendarColumn meals={columnThree} />
    </div>
  );
}

export default CalendarTimeline;
