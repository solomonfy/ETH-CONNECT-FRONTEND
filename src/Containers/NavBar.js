import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import "../CSS/NavBar.css";
import Logo from "../Images/ETHIO-CONNECT2.png";
import { Button, Dropdown, Image, Input } from "semantic-ui-react";
// import Country from "../Components/Country";
import DropDown from "../Components/DropDown";

// import CalendarContainer from "./CalendarContainer";

const NavBar = (props) => {
  const [state, setState] = useState(true);

  const navStyle = {
    color: "white",
    textSize: 20,
    fontSize: 20,
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
  const trigger = (
    <span>
      <Image avatar size="mini" src={null} />
    </span>
  );

  return (
    <div>
      <div className="navbar">
        <Image src={Logo} />
        <Dropdown
          // trigger={trigger}
          item
          simple
          text="Menu - ማውጫ"
          style={navStyle}
          // pointing="top center"
        >
          <Dropdown.Menu>
            <Dropdown.Item
              text="All Events - ክስተቶች"
              icon="home"
              as={Link}
              to="/main"
            />
            <Dropdown.Item
              text="Calendar View - ቀን መቁጠሪያ"
              icon="calendar alternate outline"
              as={Link}
              to="/calendar"
            />
            <Dropdown.Item
              text="My Invitations - የእኔ ግብዣዎች"
              icon="folder open"
              as={Link}
              to="/invitations"
            />

            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Photo - ፎቶ</span>
              <Dropdown.Menu>
                <Dropdown.Item
                  text="Gallery - ማዕከለ-ስዕላት"
                  icon="picture"
                  as={Link}
                  to="/photo-gallery"
                />
                <Dropdown.Item
                  text="Add photo - ፎቶ ጨምር"
                  icon="photo"
                  as={Link}
                  to="/add-photo"
                />
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Actions</Dropdown.Header>
            <Dropdown.Item
              text="Host event - ክስተት ማስተናገድ"
              icon="birthday cake"
              as={Link}
              to="/new_event"
            />
            <Dropdown.Item
              text="Invite members - አባላትን ጋብዝ"
              icon="tasks"
              as={Link}
              to="/new_invitation"
            />
            <Dropdown.Item
              text="Add announcement - ማስታወቂያ አክል"
              icon="bullhorn"
              as={Link}
              to="/new_announcement"
            />
          </Dropdown.Menu>
        </Dropdown>

        <div>{/* <Country /> */}</div>
        {/* <Input focus placeholder="Search..." /> */}
        <DropDown member={member} logOut={logOut} />
      </div>
    </div>
  );
};

export default withRouter(NavBar);
