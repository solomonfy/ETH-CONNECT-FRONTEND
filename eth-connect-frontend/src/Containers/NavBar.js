import React from "react";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";
// import CalendarContainer from "./CalendarContainer";

const NavBar = (props) => {
  return (
    <div>
      {props.logged_in ? (
        "HELLO"
      ) : (
        <div>
          <LogIn logInUrl={props.logInUrl} />
          <SignUp />
        </div>
      )}
      {/* <CalendarContainer /> */}
    </div>
  );
};

export default NavBar;
