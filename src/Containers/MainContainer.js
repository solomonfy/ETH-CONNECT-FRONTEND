import React from "react";
import "../CSS/Maincontainer.css";
import AnnouncementContainer from "./AnnouncementContainer";
import EventCalender from "./EventCalender";
import EventContainer from "./EventContainer";

import { Grid, Sticky, Image } from "semantic-ui-react";
import InvitationContainer from "./InvitationsContainer";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      {/* <Grid container columns={2}> */}
      {/* <Grid.Column> */}
      {/* {props.logged_in} */}
      {/* <AnnouncementContainer /> */}
      <EventContainer eventsUrl={props.eventsUrl} />
      {/* </Grid.Column> */}
      <InvitationContainer
        currentMember={props.currentMember}
        invitationsUrl={props.invitationsUrl}
      />

      {/* <EventCalender eventsUrl={props.eventsUrl} /> */}
      {/* <Grid.Column>
          <Sticky>
          </Sticky>
        </Grid.Column> */}
      {/* </Grid> */}

      {/* <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  );
};

export default MainContainer;
