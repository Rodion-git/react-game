import React from "react";

import './SideBar.css';

const SideBar: React.FC = (): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card-header">Таблица ходов</h3>
      <div className="card-body">
        <table className="table table-hover">
            <tbody>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
