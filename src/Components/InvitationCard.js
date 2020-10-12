import React, { useState, useEffect } from "react";
import { Grid, Sticky, Image } from "semantic-ui-react";

const InvitationCard = (props) => {
  const myInvitation = props.myInvitations.event;
  return (
    <div>
      <>{/* <h1>{myInvitation.description}</h1> */}</>

      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={4}>
            <h1>
              Host:{" "}
              {myInvitation.host.first_name + " " + myInvitation.host.last_name}
            </h1>
          </Grid.Column>
          <Grid.Column width={6}>
            <h1>{myInvitation.name}</h1>
            <h1>Date: {myInvitation.date}</h1>
          </Grid.Column>
          <Grid.Column width={4}>
            <h1>Location: {myInvitation.host.location}</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default InvitationCard;
