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
import React from "react";
// import "./EditUser.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Header, Image, Modal, ButtonOr } from "semantic-ui-react";

const EditAccount = (props) => {
  const [open, setOpen] = React.useState(false);

  let updateUser = (e) => {
    console.log(e.target);
    // debugger;
    e.preventDefault();
    // let configObj = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.token}`,
    //   },
    //   body: JSON.stringify({
    //     username: props.username,
    //     first_name: props.first_name,
    //     last_name: props.last_name,
    //     email: props.email,
    //     address: props.address,
    //   }),
    // };
    // fetch(props.membersUrl + `${props.id}`, configObj)
    //   .then((res) => res.json())
    //   .then((updatedMember) => {
    //     if (updatedMember.error) alert(updatedMember.error);
    //     else {
    //       setOpen(false);
    //       alert(updatedMember.message);
    //     }
    //   });
  };

  return (
    <div className="form-div">
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
                value={props.username}
                onChange={(e) => props.setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="First Name"
                placeholder="First Name"
                name="first_name"
                value={props.first_name}
                onChange={(e) => props.setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Last Name"
                placeholder="Last Name"
                name="last_name"
                value={props.last_name}
                onChange={(e) => props.setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Email"
                placeholder="Email"
                name="email"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.TextArea
                label="Address"
                placeholder="Address"
                name="address"
                value={props.address}
                onChange={(e) => props.setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button>Update Account</Button>
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <button color="green" onClick={() => setOpen(false)}>
            Back
          </button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default EditAccount;
