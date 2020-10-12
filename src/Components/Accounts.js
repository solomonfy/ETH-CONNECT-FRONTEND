import React from "react";
import { Link } from "react-router-dom";
import { Button, Image, Icon } from "semantic-ui-react";
import "../CSS/Login.css";

const Accounts = (props) => {
  const {
    first_name,
    last_name,
    address,
    email,
    username,
    family_size,
    image,
  } = props.currentMember;
  // console.log(props.currentMember);
  return (
    <div className="accounts">
      <h1>Welcome back</h1>
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
      <Button.Group>
        <Link to="/main">
          <Button animated>
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </Link>

        <Link to="/main">
          <Button animated primary>
            <Button.Content visible>Edit Account</Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
        </Link>

        <Link to="/main">
          <Button animated negative>
            <Button.Content visible>Delete Account</Button.Content>
            <Button.Content hidden>
              <Icon name="delete" />
            </Button.Content>
          </Button>
        </Link>
      </Button.Group>
    </div>
  );
};

export default Accounts;
