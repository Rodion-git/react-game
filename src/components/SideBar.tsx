import React from "react";

const SideBar: React.FC = (): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card-header">Таблица ходов</h3>
      <div className="card-body">
        <table className="table table-hover">
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>E5</td>
                    <td>F5</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>E5</td>
                    <td>F5</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
