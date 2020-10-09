import React from "react";
import { Form, Segment, Divider, Grid, Button } from "semantic-ui-react";
import "../CSS/welcome.css";

const Welcome = (props) => {
  const login = () => {
    props.history.push("/login");
  };

  const signup = () => {
    props.history.push("/signup");
  };

  return (
    <div className="welcome">
      <div className="welcome-text">
        <h1 id="welcome-second-header">DMV ETHIOPIAN COMMUNITY</h1>
        {/* <Button
          style={{ "margin-right": "10px" }}
          variant="primary"
          onClick={login}
        >
          Login
        </Button>
        <Button
          style={{ "margin-left": "10px" }}
          variant="primary"
          onClick={signup}
        >
          Sign Up
        </Button> */}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Welcome;
