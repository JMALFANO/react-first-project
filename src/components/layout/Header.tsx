import React from "react";

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Juan Martín Alfano</h1>
      <nav className="nav">
        <ul className="navbar">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portafolio</NavLink>
          </li>
          <li>
            <a
              href="https://github.com/jmalfano"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <NavLink to="/curriculum">Curriculum</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
