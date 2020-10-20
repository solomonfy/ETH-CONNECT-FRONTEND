import React from "react";

import {
  List,
  Grid,
  Header,
  Segment,
  Container,
  Icon,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <p>Created by Solomon Yismaw</p>
        <br />
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Contact" />
                {/* <Icon loading name="spinner" /> */}
                <a>
                  <Icon name="github" inverted size={"big"} />
                  <List link inverted>
                    <List.Item as="a">GitHub</List.Item>
                  </List>
                </a>
                <br />
                <a>
                  <Icon name="linkedin" inverted size={"big"} />
                  <List link inverted>
                    <List.Item as="a">LinkedIn</List.Item>
                  </List>
                </a>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">How To use the application</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>This application is intended for social communication</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
