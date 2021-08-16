import React from "react";

import NavBar from "../NavBar/NavBar";
import Dropdown from "./Dropdown/Dropdown";
import Information from "./Information/Information";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-div">
        <div className="dropdown-div">
          <Dropdown />
          <Information />
        </div>
      </div>
    </>
  );
}

export default Home;
