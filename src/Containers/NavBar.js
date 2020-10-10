import React from "react";
import { withRouter, Link } from "react-router-dom";

import "../CSS/NavBar.css";
import { Button, Dropdown, Image } from "semantic-ui-react";

// import CalendarContainer from "./CalendarContainer";

const NavBar = (props) => {
  const navStyle = {
    color: "white",
  };

  const goToLogIn = () => {
    props.history.push("/login");
  };

  const logOut = () => {
    localStorage.clear();
    setTimeout(() => goToLogIn(), 5);
  };

  let member = props.currentMember;
  let fullName = member.first_name + " " + member.last_name;
  // console.log(member);

  return (
    <div>
      <div className="navbar">
        <div>
          <Link to="/profile_page">
            <span style={navStyle}>{fullName}</span>
          </Link>
          <Image
            src="https://i.ytimg.com/vi/e2klKMj4JEw/maxresdefault.jpg"
            size="mini"
            circular
          />
        </div>
        <Link to="/invitations">
          <span style={navStyle}>My Invitations</span>
        </Link>
        <nav>
          <div className="nav-links">
            <Link style={navStyle} to="/photo-gallery">
              <Button primary>Photo Gallery</Button>
            </Link>
            <Link style={navStyle} to="/logout">
              <Button labelPosition="right" primary onClick={logOut}>
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
                <Link to="/login">
                  <Dropdown.Item text="Login" />
                </Link>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
