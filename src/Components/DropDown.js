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
        {image ? (
          <span>
            <Image avatar src={image} /> {first_name + " " + last_name}
          </span>
        ) : (
          <span>
            <Image
              avatar
              src="https://i.pinimg.com/originals/a1/f0/44/a1f044bca94a4d03598759f28ba02c59.jpg"
              wrapped
            />{" "}
            {first_name + " " + last_name}
          </span>
        )}
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
