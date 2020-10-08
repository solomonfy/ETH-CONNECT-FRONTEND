import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../CSS/NavBar.css";
import { Form, Segment, Divider, Grid, Button } from "semantic-ui-react";
import { Breadcrumb } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

// import CalendarContainer from "./CalendarContainer";

const NavBar = (props) => {
  const navStyle = {
    color: "white",
  };

  const logOut = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  return (
    <div className="navbar">
      <nav>
        <div className="nav-links">
          <Link style={navStyle} to="/profile_page">
            <Button primary>Profile</Button>
          </Link>
          <Link style={navStyle} to="/photo-gallery">
            <Button primary>Photo Gallery</Button>
          </Link>
          <Link style={navStyle} to="/logout">
            <Button primary onClick={logOut}>
              LogOut
            </Button>
          </Link>
        </div>
      </nav>
      <div style={navStyle}>
        <Dropdown text="Actions">
          <Dropdown.Menu>
            {localStorage.token ? (
              <>
                <Link to="/new_event">
                  <Dropdown.Item text="Host event" />
                </Link>
                <Dropdown.Item text="Accept invitation" />
                <Dropdown.Item text="Add announcement" />
              </>
            ) : (
              <Dropdown.Item text="Login" />
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar;
