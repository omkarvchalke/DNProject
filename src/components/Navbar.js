import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/Navbar.css';


const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar sticky navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img width="40" height="40" src={props.Image} alt={props.panel_name} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ml-auto">
              <Link className="nav-link" to={props.redirect1}>
                {props.Link1} <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={props.redirect2}>
                {props.Link2}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={props.redirect3}>
                {props.Link3} <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={props.redirect4}>
                {props.Link4}
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                News Feed
              </a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0 search-bar">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            { 
            props.logout===false ?
            <Link to="/">
            <button className="invisible btn btn-outline-danger">Logout</button>
            </ Link>
              : <Link to="/">
              <button className="ml-2 btn btn-outline-danger">Logout</button>
              </ Link>
            }
            
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
