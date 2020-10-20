import React, { useState, useEffect } from "react";
import Announcement from "../Components/Announcement";
import { Grid, Container, Divider, List, Button } from "semantic-ui-react";

const AnnouncementContainer = (props) => {
  // console.log(props.currentMember);
  // console.log(props.allAnnouncements);

  const [arrayOfAllAnnouncements, setAnnouncements] = useState([]);

  useEffect(() => {
    setAnnouncements(props.allAnnouncements);
  });

  // console.log(arrayOfAllAnnouncements);
  return (
    <div className="announcement-card">
      <br />
      <h2>Announcements</h2>
      <br />
      {!arrayOfAllAnnouncements
        ? null
        : arrayOfAllAnnouncements.map((anAnnouncement) => (
            <Announcement
              anAnnouncement={anAnnouncement}
              key={anAnnouncement.id}
              currentMember={props.currentMember}
              deleteAnnouncement={props.deleteAnnouncement}
            />
          ))}
    </div>
  );
};

export default AnnouncementContainer;
