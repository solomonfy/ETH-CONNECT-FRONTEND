// import faker from "faker";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image } from "semantic-ui-react";

const DropDown = (props) => {
  // console.log(props);
  const dropDown = {
    color: "white",
    fontSize: 20,
  };

  if (props.member === null) {
    return <div></div>;
  } else {
    // debugger;
    const { first_name, last_name, image } = props.member;
    const trigger = (
      <span style={dropDown}>
        <Image avatar size="mini" src={image} /> {first_name + " " + last_name}
      </span>
    );

    return (
      <Dropdown trigger={trigger} pointing="top right" icon={null}>
        <Dropdown.Menu>
          <Dropdown.Item
            text="Account"
            icon="address book"
            as={Link}
            to="/account"
          />
          <Dropdown.Item
            text="Sign Out - ዘግተው ይውጡ"
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
