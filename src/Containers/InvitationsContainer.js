import React from "react";
import InvitationCard from "../Components/InvitationCard";

const InvitationContainer = (props) => {

  setTimeout(() => {
    
    // console.log(props.currentMember)
  }, 3000);
  return (
    <div className="invitation">
      <InvitationCard currentMember={props.currentMember} />
    </div>
  );
};

export default InvitationContainer;
