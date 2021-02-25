import React from "react";

import './Figure.css';

type FigureProps = {
  name: string;
  position: [number, number];
};

const Figure: React.FC<FigureProps> = ({ name, position }) => {
  let [x, y] = position;

  return (
    <div
      style={{
        transform: `translate(${y}%,${x}%)`,
      }}
      className={`fig ${name}`}
    />
  );
};

export default Figure;
