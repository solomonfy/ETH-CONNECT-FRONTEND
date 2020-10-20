import React, { useState, useEffect } from "react";
import InvitationCard from "../Components/InvitationCard";
import { Grid } from "semantic-ui-react";

const InvitationContainer = (props) => {
  const [allInvitations, setAllInvitations] = useState([]);

  useEffect(() => {
    fetch(props.invitationsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setAllInvitations(data));
  }, []);

  return (
    <div className="invitation-container">
      <Grid celled="internally">
        <h1
          style={{
            backgroundColor: "white",
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "black",
            alignSelf: "flex-start",
          }}
        >
          My Invitations
        </h1>
        <Grid.Row>
          {props.currentMember === null && allInvitations.length === 0
            ? null
            : allInvitations
                .filter((inv) => inv.attendee_id === props.currentMember.id)
                .map((Inv) => (
                  <Grid.Column width={5}>
                    <InvitationCard
                      currentMember={props.currentMember}
                      invitationsUrl={props.invitationsUrl}
                      myInvitations={Inv}
                      key={Inv.id}
                    />
                  </Grid.Column>
                ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default InvitationContainer;
