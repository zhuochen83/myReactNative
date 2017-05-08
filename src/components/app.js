import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class App extends Component {
      render() {
          return (
              <Container>
                  <Content />
                  <Footer >
                      <FooterTab>
                          <Button active vertical>
                              <Icon name="home" />
                              <Text>Home</Text>
                          </Button>
                          <Button vertical>
                              <Icon name="camera" />
                              <Text>Trainer</Text>
                          </Button>
                          <Button vertical>
                              <Icon active name="navigate" />
                              <Text>Event</Text>
                          </Button>
                          <Button vertical>
                              <Icon name="person" />
                              <Text>My..</Text>
                          </Button>
                      </FooterTab>
                  </Footer>
              </Container>
          );
      }
  }
