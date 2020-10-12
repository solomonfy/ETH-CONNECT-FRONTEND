import React, { useState, useEffect } from "react";
import InvitationCard from "../Components/InvitationCard";

const InvitationContainer = (props) => {
  const [allInvitations, setAllInvitations] = useState([]);

  useEffect(() => {
    fetch(props.invitationsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setAllInvitations(data));
  }, []);

  // if (allInvitations.length === 0) {
  //   return null;
  // } else {
  //   allInvitations
  //     .filter((inv) => inv.attendee_id === props.currentMember.id)
  //     .map((Inv) => console.log(Inv.event));
  // }

  return (
    <div className="invitation">
      {allInvitations.length === 0
        ? null
        : allInvitations
            .filter((inv) => inv.attendee_id === props.currentMember.id)
            .map((Inv) => (
              <InvitationCard
                currentMember={props.currentMember}
                invitationsUrl={props.invitationsUrl}
                myInvitations={Inv}
              />
            ))}
    </div>
  );
};

export default InvitationContainer;
