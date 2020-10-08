import React from "react";
import "../CSS/Signup.css";
import { Form, Segment, Divider, Grid, Button } from "semantic-ui-react";

class SignUp extends React.Component {
  handleChange = (e) => {
    // debugger;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
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
    e.preventDefault();
    e.target.reset();

    fetch(membersUrl, configObj)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div className="sign-up-form">
        {/* <Segment placeholder> */}
        {/* <Button content="Sign up" icon="signup" size="big" /> */}
        <br />
        <Form size={"large"} onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
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
          </Form.Group>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <Form.Input
            icon="internet explorer"
            iconPosition="left"
            label="email"
            name="email"
            type="email"
            placeholder="email"
            onChange={this.handleChange}
          />
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
            label="Family size"
            name="family_size"
            type="number"
            placeholder="family size"
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
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Address"
            name="address"
            placeholder="address"
            onChange={this.handleChange}
          />

          <Button content="Sign up" primary />
        </Form>
        {/* </Segment> */}
      </div>
    );
  }
}

export default SignUp;
