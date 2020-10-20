import React from "react";

import {
  List,
  Grid,
  Header,
  Segment,
  Container,
  Icon,
  Divider,
  Image,
} from "semantic-ui-react";

const Footer = () => {
  var phantom = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
  };

  return (
    <div style={phantom}>
      <Segment inverted vertical style={{ padding: "1em 0em" }}>
        <br />
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header inverted as="h4" content="Contact" />
                {/* <Icon loading name="spinner" /> */}
                <List horizontal inverted divided link size="small">
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
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">How To use the application</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          {/* <Image centered size="mini" src="/logo.png" /> */}
          <p>Created by Solomon Yismaw, 2020</p>

          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
