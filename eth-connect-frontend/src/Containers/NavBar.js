import React from "react";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import "../CSS/NavBar.css";
import { Form, Segment, Divider, Grid, Button } from "semantic-ui-react";

// import CalendarContainer from "./CalendarContainer";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div>
        <Button primary>Profile</Button>
        <Button primary>Photo Gallery</Button>
        <Button primary>LogOut</Button>
      </div>
      {/* {props.logged_in ? (
        "HELLO"
      ) : (
        <div>
          <LogIn logInUrl={props.logInUrl} />
          <SignUp />
        </div>
      )} */}
      {/* <CalendarContainer /> */}
    </div>
  );
};

export default NavBar;
