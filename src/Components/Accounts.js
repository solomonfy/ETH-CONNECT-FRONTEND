import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Icon } from "semantic-ui-react";
import "../CSS/Account.css";

const Accounts = (props) => {
  const {
    username,
    first_name,
    last_name,
    address,
    email,
    image,
    id,
    active,
  } = props.currentMember;

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

  const deactivateAccount = () => {
    console.log("Clicked");
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

  return (
    <div className="account-div">
      <h1 className="header">Account Information</h1>
      <br />
      <h3>User Name: {" " + username}</h3>
      <br />
      <h3>First Name: {first_name}</h3>
      <br />
      <h3>Last Name: {last_name}</h3>
      <br />
      <h3>Address: {address}</h3>
      <br />
      {/* <h3>Profile Image:</h3> */}
      <br />
      <span>
        {image ? (
          <Image avatar src={image} />
        ) : (
          // <Image avatar src="../Images/reactapp.png" />
          <Image
            avatar
            src="https://i.pinimg.com/originals/a1/f0/44/a1f044bca94a4d03598759f28ba02c59.jpg"
            wrapped
          />
        )}
      </span>
      <br />
      <br />
      <Button.Group>
        <Link to="/main">
          <Button animated secondary>
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </Link>
        {/* <Button negative onClick={() => deactivateAccount()}>
          Deactivate
        </Button> */}
        <Link to="/edit_account">
          <Button primary>Edit Account</Button>
        </Link>
      </Button.Group>
      <br />
    </div>
  );
};

export default Accounts;
