import React from "react";

import Navbar from "./NavBar";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
