import React from "react";
import { Dropdown, Label, Select } from "semantic-ui-react";

const Sort = (props) => {
  return (
    <div>
      {/* <div> */}
      <Label size="large">Sort events by:</Label>
      <select onChange={(e) => props.sortEvents(e.target.value)}>
        <option value="all">All - ሁሉም</option>
        <option value="upcoming" defaultValue>
          Upcoming events - የሚመጡ ክስተቶች
        </option>
        <option value="past">Past events - ያለፉ ክስተቶች</option>
        <option value="name">Name - የክስተቶች ስም</option>
        <option value="my_events">My Events - የእኔ ክስተቶች</option>
      </select>
      {/* </div> */}
    </div>
  );
};

export default Sort;
