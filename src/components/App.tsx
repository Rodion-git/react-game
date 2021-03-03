import React, { useState } from "react";

import Board from "./Board";
import SideBar from "./SideBar";
import Footer from "./Footer";
import "./App.css";
import Header from "./Header";

const App: React.FC = (): JSX.Element => {
  const [begin, setBegin] = useState<boolean>(true);
  const handlerBegin = ():void => {
    setBegin(true);
  }
  return (
    <>
      <main className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Board beginSt={begin} beginH={handlerBegin} />
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
