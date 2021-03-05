import React from "react";

import { board } from "./Helpers";
import "./Figures.css";

const figures: JSX.Element[] = board.map((item: string, index: number) =>
  item ? (
    <div
      className={`fig ${item} square-${index}`}
      data-id={index}
      key={index}
      data-fig={item}
      draggable="true"
    />
  ) : null
);

const Figures: any = (): JSX.Element[] => {
  return figures;
};

export default Figures;
