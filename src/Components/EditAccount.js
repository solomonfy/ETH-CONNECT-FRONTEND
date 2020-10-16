import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import "./EditUser.css";
import { Button, Form } from "semantic-ui-react";
import { Image, Modal } from "semantic-ui-react";

const EditAccount = (props) => {
  let member = props.currentMember;

  const [username, setUsername] = useState(member.username);
  const [first_name, setFirstName] = useState(member.first_name);
  const [last_name, setLastName] = useState(member.last_name);
  const [address, setAddress] = useState(member.address);
  const [email, setEmail] = useState(member.email);
  const [image, setImage] = useState(member.image);
  const [id, setId] = useState(member.id);
  const [open, setOpen] = useState(false);

  // console.log(props.currentMember.first_name);
  useEffect(() => {
    let member = props.currentMember;
    setUsername(member.username);
    setFirstName(member.first_name);
    setLastName(member.last_name);
    setAddress(member.address);
    setEmail(member.email);
    setImage(member.image);
    setId(member.id);
  }, []);

  let updateUser = (e) => {
    // console.log(e.target);
    // debugger;
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        address: address,
      }),
    };
    fetch(props.membersUrl + `${id}`, configObj)
      .then((res) => res.json())
      .then((updatedMember) => {
        if (updatedMember.error) alert(updatedMember.error);
        else {
          props.setCurrentMember(updatedMember);
          alert(updatedMember.message);
          setOpen(false);
        }
      });
    e.preventDefault();
    e.target.reset();
    window.location.reload();
    props.history.push("/account");
  };

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Edit Account</Button>}
      >
        <Modal.Header>Edit Account</Modal.Header>
        <Modal.Content>
          <Form onSubmit={(e) => updateUser(e)}>
            <Form.Group>
              <Form.Input
                label="Username"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="First Name"
                placeholder="First Name"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Last Name"
                placeholder="Last Name"
                name="last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.TextArea
                label="Address"
                placeholder="Address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button primary>Update Account</Button>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => setOpen(false)}>
            Back
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default withRouter(EditAccount);
