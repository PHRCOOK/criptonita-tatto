import React from "react";
import logo from "../../../public/image/logo.jpg";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gray shadow-sm">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Criptonita Tattoo" className="logo-image" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contáctanos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ayuda
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
