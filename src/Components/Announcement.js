import React from "react";
import MovingText from "react-moving-text";

const Announcement = (props) => {
  const { description, created_at, member } = props.ann;

  return (
    <MovingText
      type="animation_type"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none"
    >
      <h2>{description}</h2>
      <br />
    </MovingText>
  );
};

export default Announcement;
