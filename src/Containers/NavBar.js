import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import "../CSS/NavBar.css";
import { Button, Dropdown, Image } from "semantic-ui-react";
import Country from "../Components/Country";
import DropDown from "../Components/DropDown";

// import CalendarContainer from "./CalendarContainer";

const NavBar = (props) => {
  const [state, setState] = useState(true);

  const navStyle = {
    color: "white",
  };

  const goToLogIn = () => {
    props.history.push("/login");
  };

  const logOut = () => {
    localStorage.clear();
    setState(false);
    setTimeout(() => goToLogIn(), 5);
  };

  let member = props.currentMember;
  // let fullName = member.first_name + " " + member.last_name;
  // console.log(member);

  return (
    <div>
      <div className="navbar">
        <DropDown member={member} logOut={logOut} />
        {/* <Link to="/main">
          <span style={navStyle}>Events</span>
        </Link> */}
        <nav>
          <div className="nav-links">
            <Link style={navStyle} to="/photo-gallery">
              <Button primary>Photo Gallery</Button>
            </Link>
          </div>
        </nav>
        <div style={navStyle}>
          <Dropdown text="Actions">
            <Dropdown.Menu>
              {localStorage.token ? (
                <>
                  <Dropdown.Item
                    text="Calendar View"
                    icon="calendar alternate outline"
                    as={Link}
                    to="/calendar"
                  />
                  <Dropdown.Item
                    text="Host event"
                    icon="birthday cake"
                    as={Link}
                    to="/new_event"
                  />
                  <Dropdown.Item
                    text="Invite members"
                    icon="tasks"
                    as={Link}
                    to="/new_invitation"
                  />
                  <Dropdown.Item
                    text="Add announcement"
                    icon="bullhorn"
                    as={Link}
                    to="/new_invitation"
                  />
                </>
              ) : (
                <Link to="/login">
                  <Dropdown.Item text="Login" />
                </Link>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>{/* <Country /> */}</div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
