import React from "react";
import { Dropdown, Label, Select } from "semantic-ui-react";

const Sort = (props) => {
  return (
    <div>
      {/* <div> */}
      <Label size="large">Sort events by:</Label>
      <select onChange={(e) => props.sortEvents(e.target.value)}>
        <option value="all">All</option>
        <option value="upcoming" defaultValue>
          Upcoming events
        </option>
        <option value="past">Past events</option>
        <option value="name">Name</option>
        <option value="my_events">My Events</option>
      </select>
      {/* </div> */}
    </div>
  );
};

export default Sort;
