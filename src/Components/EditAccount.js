// import React from "react";
// import { Link } from "react-router-dom";

// import "../CSS/Signup.css";
// import { Form, Divider, Grid, Button, Segment } from "semantic-ui-react";

// class EditAccount extends React.Component {
//   state = {
//     editError: "",
//   };

//   handleChange = (e) => {
//     // debugger;
//     // this.setState({
//     //   [e.target.name]: e.target.value,
//     // });
//     // this.props.setCurrentMember;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     let configObj = {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${localStorage.token}`,
//       },
//       body: JSON.stringify({
//         member: {
//           first_name: this.state.first_name,
//           last_name: this.state.last_name,
//           email: this.state.email,
//           username: this.state.username,
//           password: this.state.password,
//           family_size: this.state.family_size,
//           image: this.state.image,
//           address: this.state.address,
//         },
//       }),
//     };
//     let membersUrl = this.props.membersUrl;

//     fetch(membersUrl + `${this.props.currentMember.id}`, configObj)
//       .then((resp) => resp.json())
//       .then((editedMember) => {
//         if (!editedMember.error) {
//           console.log(editedMember);
//           // localStorage.token = editedMember.token;
//           // localStorage.id = editedMember.id;
//           alert("Account edited");
//         } else {
//           this.setState({ editError: editedMember.error });
//           alert(editedMember.error);
//         }
//       });
//     e.target.reset();
//     this.props.history.push("/login");
//   };

//   render() {
//     const {
//       first_name,
//       last_name,
//       email,
//       username,
//       address,
//       family_size,
//       image,
//     } = this.props.currentMember;

//     return (
//       <div className="sign-up-form">
//         <Segment placeholder>
//           <br />
//           <Form size={"large"} onSubmit={(e) => this.handleSubmit(e)}>
//             <Grid columns="equal">
//               <Grid.Column width={8}>
//                 <Form.Input
//                   icon="user"
//                   iconPosition="left"
//                   label="First Name"
//                   name="first_name"
//                   value={first_name}
//                   placeholder="First name"
//                   onChange={() => this.props.setCurrentMember()}
//                 />
//                 <Form.Input
//                   icon="user"
//                   iconPosition="left"
//                   label="Last Name"
//                   name="last_name"
//                   value={last_name}
//                   placeholder="Last name"
//                   onChange={() => this.props.setCurrentMember()}
//                 />
//               </Grid.Column>
//               <Grid.Column width={8}>
//                 <Form.Input
//                   icon="internet explorer"
//                   iconPosition="left"
//                   label="E-mail"
//                   name="email"
//                   value={email}
//                   type="email"
//                   placeholder="email"
//                   onChange={() => this.props.setCurrentMember()}
//                 />
//                 <Form.Input
//                   icon="user"
//                   iconPosition="left"
//                   label="Username"
//                   name="username"
//                   value={username}
//                   placeholder="Username"
//                   onChange={() => this.props.setCurrentMember()}
//                 />
//               </Grid.Column>
//               <Grid.Column width={8}>
//                 <Form.Input
//                   icon="user"
//                   iconPosition="left"
//                   label="Address"
//                   name="address"
//                   value={address}
//                   placeholder="address"
//                   onChange={() => this.props.setCurrentMember()}
//                 />

//                 <Form.Input
//                   icon="user circle"
//                   iconPosition="left"
//                   label="Family size"
//                   name="family_size"
//                   value={family_size}
//                   type="number"
//                   placeholder="family size"
//                   onChange={() => this.props.setCurrentMember()}
//                 />
//               </Grid.Column>
//               <Grid.Column width={8}>
//                 <Form.Input
//                   icon="user circle"
//                   iconPosition="left"
//                   label="Profile picture"
//                   name="image"
//                   value={image}
//                   placeholder="Image url.."
//                   onChange={() => this.props.setCurrentMember()}
//                 />
//               </Grid.Column>
//               <Button content="Submit" primary center />

//               <Grid.Column verticalAlign="middle"></Grid.Column>
//               <Link to="/account">
//                 <Button content="Cancel" />
//               </Link>
//             </Grid>
//             <Divider vertical></Divider>
//           </Form>
//         </Segment>
//       </div>
//     );
//   }
// }

// export default EditAccount;
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import "./EditUser.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Header, Image, Modal, ButtonOr } from "semantic-ui-react";

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
