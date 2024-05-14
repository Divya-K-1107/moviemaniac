import React from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode.jsx";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      //if we were using id, we would have used <a href="#id_name like #popular
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated
          <img
            src={Star}
            alt="glowing-star emoji"
            className="navbar_emoji"
          ></img>
        </NavLink>
        <NavLink to="/upcoming">
          Upcoming
          <img
            src={Party}
            alt="partying-face emoji"
            className="navbar_emoji"
          ></img>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
