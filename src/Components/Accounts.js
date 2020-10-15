import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Icon } from "semantic-ui-react";
import "../CSS/Account.css";
import EditAccount from "./EditAccount";

const Accounts = (props) => {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    let member = props.currentMember;
    setUsername(member.username);
    setFirstName(member.first_name);
    setLastName(member.last_name);
    setAddress(member.address);
    setEmail(member.email);
    setImage(member.image);
    setId(member.id);
  });

  const deleteAccount = () => {
    fetch(props.membersUrl + `${props.currentMember.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    }).then(() => {
      localStorage.clear();
      alert("Account successfully deleted");
      props.history.push("/");
      // props.status();
    });
  };

  return (
    <div className="account-div">
      <h1 className="header">Account Information</h1>
      <br />
      <h3>User Name: </h3>
      <br />
      <span>{username}</span>
      <br />
      <h3>First Name: {first_name}</h3>
      <br />
      <h3>Lat Name: {last_name}</h3>
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
        username={username}
        setUsername={setUsername}
        first_name={first_name}
        setFirstName={setFirstName}
        last_name={last_name}
        setLastName={setLastName}
        address={address}
        setAddress={setAddress}
        email={email}
        setEmail={setEmail}
        id={id}
        membersUrl={props.membersUrl}
      />
      <br></br>
      <Button onClick={() => deleteAccount()}>Delete Account</Button>
    </div>
  );
};

export default Accounts;
