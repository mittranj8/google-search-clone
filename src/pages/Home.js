import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home_navbar">
        <div className="home_navbarLeft">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="home_navbarRight">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google_logo"
        />
        <div className="home_inputSearch">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
