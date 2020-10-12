// import faker from "faker";
import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

const DropDown = (props) => {
  const trigger = (
    <span>
      <Image
        avatar
        src="https://i2-prod.mirror.co.uk/incoming/article9287204.ece/ALTERNATES/s1200b/Mickey-mouse.jpg"
      />{" "}
      {props.fullName}
    </span>
  );

  const options = [
    { key: "user", text: "Account", icon: "user" },
    { key: "settings", text: "Settings", icon: "settings" },
    { key: "sign-out", text: "Sign Out", icon: "sign out" },
  ];

  return (
    <Dropdown>
      <Dropdown
        trigger={trigger}
        options={options}
        pointing="top left"
        icon={null}
      />
    </Dropdown>
  );
};

export default DropDown;
