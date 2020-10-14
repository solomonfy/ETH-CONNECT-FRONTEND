import React, { useState } from "react";
import "../CSS/Maincontainer.css";
import AnnouncementContainer from "./AnnouncementContainer";
import EventCalender from "./EventCalender";
import EventContainer from "./EventContainer";

import { Grid } from "semantic-ui-react";
import InvitationContainer from "./InvitationContainer";

const MainContainer = (props) => {
  const [state, setState] = useState(false);

  return (
    <div className="main-container">
      <Grid celled="internally"></Grid>
      {/* <Grid container columns={2}> */}
      {/* <Grid.Column> */}
      {/* {props.logged_in} */}
      <Grid.Row>
        <EventContainer
          eventsUrl={props.eventsUrl}
          currentMember={props.currentMember}
          allEvents={props.allEvents}
          deleteEvent={props.deleteEvent}
        />
      </Grid.Row>
      <br />
      <br />
      <br />
      <Grid.Row>
        <AnnouncementContainer
          currentMember={props.currentMember}
          allAnnouncements={props.allAnnouncements}
        />
      </Grid.Row>
      {/* </Grid.Column> */}

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
