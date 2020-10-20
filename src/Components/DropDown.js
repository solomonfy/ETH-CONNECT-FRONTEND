// import faker from "faker";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image } from "semantic-ui-react";

const DropDown = (props) => {
  // console.log(props);
  const dropDown = {
    color: "white",
  };

  if (props.member === null) {
    return <div></div>;
  } else {
    // debugger;
    const { first_name, last_name, image } = props.member;
    const trigger = (
      <span style={dropDown}>
        <Image avatar size="40px" src={image} /> {first_name + " " + last_name}
      </span>
    );

    return (
      <Dropdown trigger={trigger} pointing="top left" icon={null}>
        <Dropdown.Menu>
          <Dropdown.Item
            text="Account"
            icon="address book"
            as={Link}
            to="/account"
          />
          <Dropdown.Item
            text="My Invitations"
            icon="folder open"
            as={Link}
            to="/invitations"
          />
          <Dropdown.Item
            text="Sign Out"
            icon="sign out"
            // as={Link}
            // to="/sign-out"
            onClick={() => props.logOut()}
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
};
export default DropDown;
