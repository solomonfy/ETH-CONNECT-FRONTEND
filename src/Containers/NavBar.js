import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import "../CSS/NavBar.css";
import { Button, Dropdown, Image, Input } from "semantic-ui-react";
import Country from "../Components/Country";
import DropDown from "../Components/DropDown";

// import CalendarContainer from "./CalendarContainer";

const NavBar = (props) => {
  const [state, setState] = useState(true);

  const navStyle = {
    color: "white",
    borderRadius: 6,
    // backgroundColor: "black",
    borderWidth: 1,
    // borderColor: "black",
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
        <Dropdown item simple text="Menu" style={navStyle}>
          <Dropdown.Menu>
            <Dropdown.Item
              text="All Events"
              icon="home"
              as={Link}
              to="/main"
            />
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
              to="/new_announcement"
            />
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Photo</span>
              <Dropdown.Menu>
                <Dropdown.Item text="Gallery" as={Link} to="/photo-gallery" />
                <Dropdown.Item text="Add photo" as={Link} to="/add-photo" />
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div>{/* <Country /> */}</div>
        <Input focus placeholder="Search..." />
      </div>
    </div>
  );
};

export default withRouter(NavBar);
