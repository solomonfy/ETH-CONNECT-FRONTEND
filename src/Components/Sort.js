import React from "react";

const Sort = (props) => {
  let handleSort = (e) => {
    // console.log(e);
  };

  return (
    <div>
      <div>
        <select 
        onChange={(e) => props.sortEvents(e.target.value)}
        >
          <option disabled selected>
            All
          </option>
          <option value="upcoming">Upcoming events</option>
          <option value="past">Past events</option>
          <option value="name">Sort by Event Name</option>
          <option value="date">Sort by Date</option>
        </select>
        {/* <button onClick={(e) => props.sortEvents(e.target.value)}> Show </button> */}
      </div>
    </div>
  );
};

export default Sort;
