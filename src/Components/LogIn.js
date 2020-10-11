import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Segment, Divider, Grid, Button } from "semantic-ui-react";
import "../CSS/Login.css";

const LogIn = (props) => {

  const [loggedInMember, setLoggedInMember] = useState({})


  let handleLogin = (e) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member: {
          username: e.target.username.value,
          password: e.target.password.value,
        },
      }),
    };

    

    fetch(props.logInUrl, configObj)
      .then((resp) => resp.json())
      .then((member) => {
        // setLoggedInMember(member)
        localStorage.token = member.token;
        localStorage.id = member.id;
      props.history.push("/main");


        // props.status();
        // console.log(member);
      });

    e.preventDefault();
    e.target.reset();
  };

  // let loggedIn = () => {
  // console.log(localStorage.token);
  // };

  return (
    <div className="log-in-form">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form size={"large"} onSubmit={(e) => handleLogin(e)}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                type="text"
                name="username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                name="password"
                placeholder="password"
              />

              <Button content="Login" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Link to="/signup">
              <Button content="Sign up" icon="signup" size="big" />
            </Link>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
};

export default LogIn;