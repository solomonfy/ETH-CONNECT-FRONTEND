import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Icon,
  Image,
  Modal,
  Button,
  Header,
  Input,
} from "semantic-ui-react";
import ReviewForm from "./Forms/ReviewForm";

const EventCard = (props) => {
  const {
    name,
    description,
    location,
    date,
    event_type,
    host,
    id,
    event_card,
    reviews,
  } = props.anEvent;

  // compare event date with todays date
  // console.log(props.anEvent.reviews);

  // const onClick = () => setshowForm(true);

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Card color="green">
        <Image
          src={event_card}
          // src="https://c8.alamy.com/comp/A06AXM/traditional-ethiopian-dance-painting-ethiopia-A06AXM.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {props.anEvent.host
            ? `${props.anEvent.host.first_name} ${props.anEvent.host.last_name}`
            : null}
        </Card.Content>

        <div>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button positive>Detail</Button>}
          >
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content image>
              {event_card ? (
                <Image size="medium" src={event_card} wrapped />
              ) : (
                <Image
                  size="medium"
                  src="https://c8.alamy.com/comp/A06AXM/traditional-ethiopian-dance-painting-ethiopia-A06AXM.jpg"
                  wrapped
                />
              )}
              <Modal.Description>
                <Header>
                  Host:
                  {props.anEvent.host
                    ? ` ${props.anEvent.host.first_name} ${props.anEvent.host.last_name}`
                    : null}
                </Header>
                <p>
                  <strong>Description:</strong> {description}
                </p>
                <p>
                  <strong>Event type:</strong> {event_type}
                </p>
                <p>
                  <strong>Location:</strong> {location}
                </p>
                {reviews ? <strong>Reviews:</strong> : null}
                {reviews
                  ? reviews.map((rv) => (
                      <li>
                        {rv.description}
                        <span>{rv.attendee.first_name}</span>
                      </li>
                    ))
                  : null}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              {props.anEvent.host && host.id === props.currentMember.id ? (
                <>
                  <Link to="/new_invitation">
                    <Button primary>Invite members</Button>
                  </Link>
                  <Button primary onClick={null}>
                    Edit Event
                  </Button>
                  <Button
                    negative
                    onClick={() => props.deleteEvent(props.anEvent)}
                  >
                    Delete Event
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <Input
                      type="submit"
                      value="Add review"
                      positive
                      onClick={onClick}
                    />
                    {showResults ? (
                      <ReviewForm
                        addReviewToEvent={props.addReviewToEvent}
                        reviewsUrl={props.reviewsUrl}
                        event_id={id}
                        setReviews={props.setReviews}
                        allReviews={props.allReviews}
                      />
                    ) : null}
                  </div>
                </>
              )}
            </Modal.Actions>
          </Modal>
          <br />
          <br />
        </div>
      </Card>
      {/* ) : null} */}
    </div>
  );
};

export default EventCard;
