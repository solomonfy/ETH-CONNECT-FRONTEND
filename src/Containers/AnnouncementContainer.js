import React from "react";
import Announcement from "../Components/Announcement";
import { Grid } from "semantic-ui-react";

const AnnouncementContainer = (props) => {
  console.log(props.currentMember);
  console.log(props.allAnnouncements);

  const announcement = props.allAnnouncements.map((ann) => (
    <Announcement ann={ann} key={ann.id} />
  ));

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>{announcement}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AnnouncementContainer;
