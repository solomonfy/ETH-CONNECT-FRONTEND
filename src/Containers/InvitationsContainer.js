import React from "react";
import InvitationCard from "../Components/Invitations";

const InvitationContainer = (props) => {

  return (
    <div className="invitation">
      <InvitationCard currentMember={props.currentMember} />
    </div>
  );
};

export default InvitationContainer;
