import React, { useState } from "react";

import Figures from "./Figures";
import ResizeBoard from "./ResizeBoard";
import { cordinates, icon } from "./Helpers";
import "./Board.css";

type BoardProps = {
  beginSt: boolean;
  beginH: () => void;
};

const Board: React.FC<BoardProps> = ({ beginSt, beginH }): JSX.Element => {
  const [figures, setFigures] = useState(Figures);
  let x: number = 0,
    y: number = 0,
    figX: number = 0,
    figY: number = 0,
    step: number = 0,
    element: any = "",
    img = new Image();
  const handlerDragStart = (event: any): void | undefined => {
    let { target, pageX, pageY } = event;
    if (target.classList.contains("board")) return;
    event.dataTransfer.setDragImage(img,0,0);
    element = target;
    element.classList.add("dragging");
    let id = element.dataset.id,
      position = element.getBoundingClientRect(),
      width = element.clientWidth;
    if (width / 100 < 1) step = 1 + (1 - width / 100);
    else step = width / 100;
    figX = cordinates[id][0] + (pageX - position.x - width / 2) * step;
    figY = cordinates[id][1] + (pageY - position.y - width / 2) * step;
    x = pageX;
    y = pageY;
    element.style.transform = `translate(${figX}%,${figY}%)`;
  };
  const handlerDrag = (event: any): void | undefined => {
    const { pageX, pageY } = event;
    if (pageX === 0 && pageY === 0 || !element ) return;
    let mathX: number = figX + (pageX - x) * step;
    let mathY: number = figY + (pageY - y) * step;
    figX = mathX;
    figY = mathY;
    x = pageX;
    y = pageY;
    element.style.transform = `translate(${mathX}%,${mathY}%)`;
  };
  const handlerDragEnd = (event: any): void => {
    cordinates.forEach((item, index) => {
      if (
        JSON.stringify(item) ===
        JSON.stringify([
          Math.round(figX / 100) * 100,
          Math.round(figY / 100) * 100,
        ])
      ) {
        element.className = element.className.replace(
          /square-\d+ dragging/,
          `square-${index}`
        );
        let id = Number(element.dataset.id);
        if ( id !== index) {
          const arr = [...figures];
          arr[index] = arr[id];
          arr[id] = null;
          element.setAttribute("data-id", index);
          setFigures(arr);
        }
      }
    });
    element.style.transform = "";
  };
  const start = (
    <div className="start-wrapper">
      <button className="btn btn-primary btn-start" onClick={beginH}>
        Начать Игру
      </button>
    </div>
  );
  return (
    <>
      <ResizeBoard>
        <div
          className="board"
          onDragStart={handlerDragStart}
          onDrag={handlerDrag}
          onDragEnd={handlerDragEnd}
        >
          {icon}
          {beginSt ? figures : start}
        </div>
      </ResizeBoard>
    </>
  );
};
export default Board;
