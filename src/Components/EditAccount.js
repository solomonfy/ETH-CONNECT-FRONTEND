import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

import "../CSS/Account.css";
import { Button, Form, Grid } from "semantic-ui-react";

const EditAccount = (props) => {
  let member = props.currentMember;
  // console.log(member);
  const [username, setUsername] = useState(member.username);
  const [first_name, setFirstName] = useState(member.first_name);
  const [last_name, setLastName] = useState(member.last_name);
  const [address, setAddress] = useState(member.address);
  const [email, setEmail] = useState(member.email);
  const [image, setImage] = useState(member.image);
  const [family_size, setFamilySize] = useState(member.family_size);
  const [id, setId] = useState(member.id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUsername(member.username);
    setFirstName(member.first_name);
    setLastName(member.last_name);
    setAddress(member.address);
    setEmail(member.email);
    setImage(member.image);
    setFamilySize(member.family_size);
    setId(member.id);
  }, []);

  return (
    <div className="edit-account">
      <Form size={"large"} onSubmit={(e) => props.editMemberAccount(e)}>
        <Grid columns="equal">
          <Grid.Column width={16}>
            <Form.Group widths="equal">
              <Form.Input
                label="First Name"
                placeholder="First Name"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Input
                label="Last Name"
                placeholder="Last Name"
                name="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group widths="equal">
              <Form.Input
                label="Username"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Input
                label="Email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group widths="equal">
              <Form.Input
                icon="user circle"
                iconPosition="left"
                label="Profile picture"
                name="image"
                value={image}
                placeholder="Image url.."
                onChange={(e) => setImage(e.target.value)}
              />

              <Form.Input
                icon="user circle"
                iconPosition="left"
                label="Family size"
                name="family_size"
                type="number"
                value={family_size}
                placeholder="family size"
                onChange={(e) => setFamilySize(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.TextArea
              label="Address"
              placeholder="Address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <br />
            <Button primary>Update Account</Button>
            <Link to="/account">
              <Button secondary>Cancel</Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Form>
      <br />
    </div>
  );
};

export default withRouter(EditAccount);
