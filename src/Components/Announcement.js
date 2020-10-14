import React from "react";

const Announcement = (props) => {
  const { description, created_at, member } = props.ann;

  return <div> {description}</div>;
};

export default Announcement;
