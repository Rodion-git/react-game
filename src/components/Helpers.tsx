const board: any = [
  "br",
  "bn",
  "bb",
  "bq",
  "bk",
  "bb",
  "bn",
  "br",
  "bp",
  "bp",
  "bp",
  "bp",
  "bp",
  "bp",
  "bp",
  "bp",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "wp",
  "wp",
  "wp",
  "wp",
  "wp",
  "wp",
  "wp",
  "wp",
  "wt",
  "wn",
  "wb",
  "wq",
  "wk",
  "wb",
  "wn",
  "wt",
];
const cordinates: any = [
  [0, 0],
  [100, 0],
  [200, 0],
  [300, 0],
  [400, 0],
  [500, 0],
  [600, 0],
  [700, 0],
  [0, 100],
  [100, 100],
  [200, 100],
  [300, 100],
  [400, 100],
  [500, 100],
  [600, 100],
  [700, 100],
  [0, 200],
  [100, 200],
  [200, 200],
  [300, 200],
  [400, 200],
  [500, 200],
  [600, 200],
  [700, 200],
  [0, 300],
  [100, 300],
  [200, 300],
  [300, 300],
  [400, 300],
  [500, 300],
  [600, 300],
  [700, 300],
  [0, 400],
  [100, 400],
  [200, 400],
  [300, 400],
  [400, 400],
  [500, 400],
  [600, 400],
  [700, 400],
  [0, 500],
  [100, 500],
  [200, 500],
  [300, 500],
  [400, 500],
  [500, 500],
  [600, 500],
  [700, 500],
  [0, 600],
  [100, 600],
  [200, 600],
  [300, 600],
  [400, 600],
  [500, 600],
  [600, 600],
  [700, 600],
  [0, 700],
  [100, 700],
  [200, 700],
  [300, 700],
  [400, 700],
  [500, 700],
  [600, 700],
  [700, 700],
];

const icon = (
  <svg viewBox="0 0 100 100" className="coordinates">
    <text x="0.75" y="3.5" fontSize="2.8" className="coordinate-light">
      8
    </text>
    <text x="0.75" y="15.75" fontSize="2.8" className="coordinate-dark">
      7
    </text>
    <text x="0.75" y="28.25" fontSize="2.8" className="coordinate-light">
      6
    </text>
    <text x="0.75" y="40.75" fontSize="2.8" className="coordinate-dark">
      5
    </text>
    <text x="0.75" y="53.25" fontSize="2.8" className="coordinate-light">
      4
    </text>
    <text x="0.75" y="65.75" fontSize="2.8" className="coordinate-dark">
      3
    </text>
    <text x="0.75" y="78.25" fontSize="2.8" className="coordinate-light">
      2
    </text>
    <text x="0.75" y="90.75" fontSize="2.8" className="coordinate-dark">
      1
    </text>
    <text x="10" y="99" fontSize="2.8" className="coordinate-dark">
      a
    </text>
    <text x="22.5" y="99" fontSize="2.8" className="coordinate-light">
      b
    </text>
    <text x="35" y="99" fontSize="2.8" className="coordinate-dark">
      c
    </text>
    <text x="47.5" y="99" fontSize="2.8" className="coordinate-light">
      d
    </text>
    <text x="60" y="99" fontSize="2.8" className="coordinate-dark">
      e
    </text>
    <text x="72.5" y="99" fontSize="2.8" className="coordinate-light">
      f
    </text>
    <text x="85" y="99" fontSize="2.8" className="coordinate-dark">
      g
    </text>
    <text x="97.5" y="99" fontSize="2.8" className="coordinate-light">
      h
    </text>
  </svg>
);
export { board, cordinates, icon };
