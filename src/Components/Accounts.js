import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Icon } from "semantic-ui-react";
import "../CSS/Account.css";
import EditAccount from "./EditAccount";

const Accounts = (props) => {
  let member = props.currentMember;
  const [username, setUsername] = useState(member.username);
  const [first_name, setFirstName] = useState(member.first_name);
  const [last_name, setLastName] = useState(member.last_name);
  const [address, setAddress] = useState(member.address);
  const [email, setEmail] = useState(member.email);
  const [image, setImage] = useState(member.image);
  const [id, setId] = useState(member.id);
  const [deactivate, setDeactivate] = useState(member.active);

  const deleteAccount = () => {
    fetch(props.membersUrl + `${props.currentMember.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    }).then(() => {
      localStorage.clear();
      alert("Account successfully deleted");
      // props.history.push("/");
      // props.status();
    });
  };

  const diactivateAccount = () => {
    console.log("Clicked")
    // fetch(props.membersUrl + `${props.currentMember.id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     member: {
    //       active: false,
    //     },
    //   }),
    //   headers: { Authorization: `Bearer ${localStorage.token}` },
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));
  };

  // console.log(props.currentMember);
  return (
    <div className="account-div">
      <h1 className="header">Account Information</h1>
      <br />
      <h3>User Name: {username}</h3>
      <br />
      <h3>First Name: {first_name}</h3>
      <br />
      <h3>Last Name: {last_name}</h3>
      <br />
      <h3>Address: {address}</h3>
      <br />
      <h3>Profile Image:</h3>
      <br />
      <span>
        <Image avatar src={image} />
      </span>
      <br />
      <br />
      {/* <Button.Group> */}
      <Link to="/main">
        <Button animated>
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
      {/* <Link to="/edit_account">
          <Button animated primary>
            <Button.Content visible onClick={() => props.currentMember}>
              Edit Account
            </Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
        </Link> */}
      {/* <Link to="/main">
          <Button animated negative>
            <Button.Content visible>Delete Account</Button.Content>
            <Button.Content hidden>
              <Icon name="delete" />
            </Button.Content>
          </Button>
        </Link> */}
      {/* </Button.Group> */}
      <EditAccount
        currentMember={props.currentMember}
        membersUrl={props.membersUrl}
        setCurrentMember={props.setCurrentMember}
      />
      <br></br>
      {/* <Button onClick={() => deleteAccount()}>Delete Account</Button> */}
      <Button onClick={() => diactivateAccount()}>Deactivate Account</Button>
    </div>
  );
};

export default Accounts;
