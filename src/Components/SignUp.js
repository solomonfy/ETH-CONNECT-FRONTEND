import React from "react";
import { Link } from "react-router-dom";

import "../CSS/Signup.css";
import { Form, Divider, Grid, Button, Segment, Image } from "semantic-ui-react";

import Logo from "../Images/ETHIO-CONNECT2.png";

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
          first_name:
            // this.state.first_name,
            this.state.first_name[0].toUpperCase() +
            this.state.first_name.slice(1),
          last_name:
            // this.state.last_name,
            this.state.last_name[0].toUpperCase() +
            this.state.last_name.slice(1),
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          family_size: this.state.family_size,
          image: this.state.image,
          address: this.state.address,
        },
      }),
    };
    let membersUrl = this.props.membersUrl;

    fetch(membersUrl, configObj)
      .then((resp) => resp.json())
      .then((newMembar) => {
        if (!newMembar.error) {
          // console.log(newMembar)
          // localStorage.token = newMembar.token;
          // localStorage.id = newMembar.id;
          alert("Account has been created successfully!");
          this.props.history.push("/login");
        } else {
          this.setState({ signUpError: newMembar.error });
          // alert(newMembar.error);
          alert("Fileds can not be empty");
        }
      });
    e.target.reset();
  };

  render() {
    return (
      <div className="sign-up-form">
        <Image src={Logo} />

        <Segment placeholder>
          <br />
          <Form size={"large"} onSubmit={(e) => this.handleSubmit(e)}>
            <Grid columns="equal">
              <Grid.Column width={8}>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    icon="user"
                    iconPosition="left"
                    label="First Name"
                    name="first_name"
                    placeholder="First name"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    required
                    icon="user"
                    iconPosition="left"
                    label="Last Name"
                    name="last_name"
                    placeholder="Last name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    icon="internet explorer"
                    iconPosition="left"
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    required
                    icon="user"
                    iconPosition="left"
                    label="Username"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    required
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
                </Form.Group>
                <Form.Group widths="equal">
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
                    label="Profile picture"
                    name="image"
                    placeholder="Image url.."
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Grid.Column>
            </Grid>
            <Form.Button primary>Sign up</Form.Button>
            Already have account?
            <Link to="/login"> Login</Link>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default SignUp;
