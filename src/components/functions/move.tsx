import { cordinates } from "../Helpers";

const move = (figure: any, position: number) => {
  const [x, y] = cordinates[position],
    result: any = [];
  let values: any = [];
  switch (figure) {
    case "bn":
      {
        values = [
          [x + 200, y + 100],
          [x + 200, y - 100],
          [x - 200, y + 100],
          [x - 200, y - 100],
          [x + 100, y + 200],
          [x - 100, y + 200],
          [x + 100, y - 200],
          [x - 100, y - 200],
        ];
      }
      break;
    case "bp":
      {
        values = [[x, y + 100]];
      }
      break;
    case "bb":
      {
        values = [];
        for (let index = 0; index < 4; index += 1) {
          for (let i = 0; i < 700; i += 100) {
            if (index === 0) {
              values.push([x + i, y + i]);
            } else if (index === 1) {
              values.push([x - i, y + i]);
            } else if (index === 2) {
              values.push([x + i, y - i]);
            } else if (index === 3) {
              values.push([x - i, y - i]);
            }
          }
        }
      }
      break;
    case "br":
      {
        values = [];
        for (let index = 0; index < 4; index += 1) {
          for (let i = 0; i < 700; i += 100) {
            if (index === 0) {
              values.push([x + i, y]);
            } else if (index === 1) {
              values.push([x - i, y]);
            } else if (index === 2) {
              values.push([x, y + i]);
            } else if (index === 3) {
              values.push([x, y - i]);
            }
          }
        }
      }
      break;
    case "bq":
      {
        values = [];
        for (let index = 0; index < 4; index += 1) {
          for (let i = 0; i < 700; i += 100) {
            if (index === 0) {
              values.push([x + i, y + i], [x + i, y]);
            } else if (index === 1) {
              values.push([x - i, y + i], [x - i, y]);
            } else if (index === 2) {
              values.push([x + i, y - i], [x, y + i]);
            } else if (index === 3) {
              values.push([x - i, y - i], [x, y - i]);
            }
          }
        }
      }
      break;
    case "bk":
      {
        values = [
          [x + 100, y],
          [x - 100, y],
          [x, y + 100],
          [x, y - 100],
          [x + 100, y + 100],
          [x + 100, y - 100],
          [x - 100, y + 100],
          [x - 100, y - 100],
        ];
      }
      break;
    case "wn":
      {
        values = [
          [x + 200, y + 100],
          [x + 200, y - 100],
          [x - 200, y + 100],
          [x - 200, y - 100],
          [x + 100, y + 200],
          [x - 100, y + 200],
          [x + 100, y - 200],
          [x - 100, y - 200],
        ];
      }
      break;
    case "wp":
      {
        values = [[x, y - 100]];
      }
      break;
    case "wb":
      {
        values = [];
        for (let index = 0; index < 4; index += 1) {
          for (let i = 0; i < 700; i += 100) {
            if (index === 0) {
              values.push([x + i, y + i]);
            } else if (index === 1) {
              values.push([x - i, y + i]);
            } else if (index === 2) {
              values.push([x + i, y - i]);
            } else if (index === 3) {
              values.push([x - i, y - i]);
            }
          }
        }
      }
      break;
    case "wt":
      {
        values = [];
        for (let index = 0; index < 4; index += 1) {
          for (let i = 0; i < 700; i += 100) {
            if (index === 0) {
              values.push([x + i, y]);
            } else if (index === 1) {
              values.push([x - i, y]);
            } else if (index === 2) {
              values.push([x, y + i]);
            } else if (index === 3) {
              values.push([x, y - i]);
            }
          }
        }
      }
      break;
    case "wq":
      {
        values = [];
        for (let index = 0; index < 4; index += 1) {
          for (let i = 0; i < 700; i += 100) {
            if (index === 0) {
              values.push([x + i, y + i], [x + i, y]);
            } else if (index === 1) {
              values.push([x - i, y + i], [x - i, y]);
            } else if (index === 2) {
              values.push([x + i, y - i], [x, y + i]);
            } else if (index === 3) {
              values.push([x - i, y - i], [x, y - i]);
            }
          }
        }
      }
      break;
    case "wk":
      {
        values = [
          [x + 100, y],
          [x - 100, y],
          [x, y + 100],
          [x, y - 100],
          [x + 100, y + 100],
          [x + 100, y - 100],
          [x - 100, y + 100],
          [x - 100, y - 100],
        ];
      }
      break;
  }
  cordinates.forEach((item: [number, number], index: number) => {
    values.forEach((value: [number, number]) => {
      if (JSON.stringify(item) === JSON.stringify(value)) {
        const check =
          value[0] <= 700 && value[0] >= 0 && value[1] <= 700 && value[1] >= 0;
        if (check) {
          result.push(index);
        }
      }
    });
  });
  return Array.from(new Set(result));
};

export { move };
