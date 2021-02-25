import React from "react";

import Figure from "./Figure";
import ResizeBoard from "./ResizeBoard";
import "./Board.css";


const Board: React.FC = (): JSX.Element => {
  const square: JSX.Element[] = [],
    figuresBlack: Array<string>[] = [
      ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
      ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ],
    figuresWhite: Array<string>[] = [
      ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
      ["wt", "wn", "wb", "wq", "wk", "wb", "wn", "wt"],
    ];
  figuresBlack.forEach((item, index) => {
    item.forEach((elem, iter) => {
      square.push(<Figure key={Math.random()} name={elem} position={[index * 100, iter * 100]} />);
    });
  });
  figuresWhite.forEach((item, index) => {
    item.forEach((elem, iter) => {
      square.push(
        <Figure key={Math.random()} name={elem} position={[(6 + index) * 100, iter * 100]} />
      );
    });
  });
  return (
    <ResizeBoard>
      <div className="board">{square}</div>
    </ResizeBoard>
  );
};

export default Board;
