import React from "react";
import { Logo, ButtonColored } from "../styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto ml-auto">
          <il>
            <Logo to="/">
              <img
                src={
                  "https://sites.google.com/site/ollivanderandson/_/rsrc/1468745693908/config/customLogo.gif?revision=4"
                }
                alt="logo"
              />
            </Logo>
          </il>
        </ul>

        <Link to="/wands">
          <ButtonColored>To Wands list </ButtonColored>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
