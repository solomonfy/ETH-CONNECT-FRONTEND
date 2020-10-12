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
      <strong>User Name: </strong>
      <br />
      <span>{username}</span>
      <br />
      <br />
      <strong>First Name: {first_name}</strong>
      <br />
      <br />
      <strong>Lat Name: {last_name}</strong>
      <br />
      <br />
      <strong>Profile Image:</strong>
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

        {/* <Button primary>Back</Button> */}
        <Link to="/main">
          <Button primary icon="edit">
            Edit Account{" "}
          </Button>
        </Link>
        <Link to="/main">
          <Button negative icon="trash">
            Delete Account{" "}
          </Button>
        </Link>
      </Button.Group>
    </div>
  );
};

export default Accounts;
