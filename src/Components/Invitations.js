import React from "react";

const InvitationCard = (props) => {
  const myInv = props.currentMember.received_invitations;

  setTimeout(() => {
    // myInv.map((inv) => console.log(inv.event.description));
  }, 1000);
  return <div></div>;
};

export default InvitationCard;
