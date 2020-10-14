import React from "react";
import { Link } from "react-router-dom";

import "../CSS/Signup.css";
import { Form, Divider, Grid, Button, Segment } from "semantic-ui-react";

class SignUp extends React.Component {
  state = {
    signUpError: "",
  };
  handleChange = (e) => {
    // debugger;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          family_size: this.state.family_size,
          image: this.state.image,
          address: this.state.address,
        },
      }),
    };
    let membersUrl = this.props.baseUrl + "members";

    fetch(membersUrl, configObj)
      .then((resp) => resp.json())
      .then((newMembar) => {
        if (!newMembar.error) {
          // console.log(newMembar)
          // localStorage.token = newMembar.token;
          // localStorage.id = newMembar.id;
          alert("Account created");
        } else {
          this.setState({ signUpError: newMembar.error });
          alert(newMembar.error);
        }
      });
    e.target.reset();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="sign-up-form">
        <Segment placeholder>
          <br />
          <Form size={"large"} onSubmit={(e) => this.handleSubmit(e)}>
            <Grid columns="equal">
              <Grid.Column width={8}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="First Name"
                  name="first_name"
                  placeholder="First name"
                  onChange={this.handleChange}
                />
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Last Name"
                  name="last_name"
                  placeholder="Last name"
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Form.Input
                  icon="internet explorer"
                  iconPosition="left"
                  label="E-mail"
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Address"
                  name="address"
                  placeholder="address"
                  onChange={this.handleChange}
                />

                <Form.Input
                  icon="user circle"
                  iconPosition="left"
                  label="Family size"
                  name="family_size"
                  type="number"
                  placeholder="family size"
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <Form.Input
                  icon="user circle"
                  iconPosition="left"
                  label="Profile picture"
                  name="image"
                  placeholder="Image url.."
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Button content="Sign up" primary center />

              <Grid.Column verticalAlign="middle"></Grid.Column>
              <Link to="/login">
                <Button content="Back" />
              </Link>
            </Grid>
            <Divider vertical></Divider>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default SignUp;
