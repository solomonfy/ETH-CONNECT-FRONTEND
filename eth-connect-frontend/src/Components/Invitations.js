import React from "react";

const Invitations = (props) => {
  const myInvitations = props.currentMember.received_invitations;

  console.log(myInvitations);
  return (
    <div className="invitation">
      My invitations
      {/* {myInvitations.map((inv) => inv.event)} */}
    </div>
  );
};

export default Invitations;
