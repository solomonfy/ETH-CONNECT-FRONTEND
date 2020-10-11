import React from "react";
import InvitationCard from "../Components/InvitationCard";

const InvitationContainer = (props) => {

  const myInv = props.currentMember.received_invitations;
  // let a = myInv.map(inv => (inv.event))
// console.log(myInv)
  
  return (
    <div className="invitation">
      {/* {myInv.map(invitation => (
        <InvitationCard currentMember={props.currentMember} invitation={invitation}/>
        
      ))} */}
      <InvitationCard currentMember={props.currentMember} myInv={myInv}/>
    </div>
  );
};

export default InvitationContainer;
