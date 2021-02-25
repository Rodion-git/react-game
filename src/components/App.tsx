import React from "react";

import Board from "./Board";
import SideBar from "./SideBar";
import Footer from "./Footer";
import "./App.css";
import Header from "./Header";


const App: React.FC = (): JSX.Element => {
  return (
    <>
      <main className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Board />
              </div>
              <div className="col-md-4">
                <SideBar />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;
