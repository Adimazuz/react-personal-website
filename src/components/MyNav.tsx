import React from "react";

function MyNav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top my-nav"
        role="navigation"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center order-2"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav  ">
            <li className="nav-item ">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-item nav-link " href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#experience">
                Expirence
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#skills">
                skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MyNav;
