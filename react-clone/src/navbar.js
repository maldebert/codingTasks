import React from "react";
import "./App.css"; // Import custom CSS

class NavigationMenu extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/912/original/mirabeau-logo.png?1716116679"
            alt="Logo"
          />
        </div>
        <ul>
          <li>
            <a href="https://www.maisonmirabeau.com/our-range/">OUR RANGE</a>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/shop/">SHOP</a>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/about/">ABOUT</a>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/journal/">JOURNAL</a>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/b-corp">B CORP</a>
          </li>
          <li>
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/126/920/original/search_24dp_FILL0_wght400_GRAD0_opsz24.png?1716124786"
              className="search"
            ></img>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/en/">EN</a>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/fr/">FR</a>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/de/">DE</a>
          </li>
          <li>
            <a href="https://www.maisonmirabeau.com/jp/">JP</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavigationMenu;
