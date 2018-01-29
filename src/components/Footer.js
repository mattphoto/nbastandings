import React, { Component } from 'react';

import {
  StandingsContainer,
  MouseOverMessage,
  FooterContainer,
  FooterLogo,
  FooterColumn,
  FooterHeader,
  FooterLink,
} from './styles';

import {
  gamesBackRowFactor,
} from './constants';

export class Footer extends Component {
  render() {

    return (
      <FooterContainer >
        <FooterColumn space>
          <FooterLogo>bballstandings.com</FooterLogo>
          <FooterLink>
            <a href="mailto:bball@rueif.com">email feedback</a>
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
        </FooterColumn>
        <FooterColumn>
        </FooterColumn>
        <FooterColumn>
          <FooterHeader>colophon</FooterHeader>
          <FooterLink>
            <a href="https://github.com/facebook/create-react-app">create-react-app</a>
          </FooterLink>
          <FooterLink>
            <a href="https://www.styled-components.com/">Styled-Components</a>
          </FooterLink>
          <FooterLink>
            <a href="https://github.com/bttmly/nba">bttmly / nba</a>
          </FooterLink>
          <FooterLink>
            <a href="http://surge.sh/">surge.sh</a>
          </FooterLink>
          <FooterLink>
            <a href="https://fonts.google.com/specimen/Open+Sans">Open+Sans:400,600,800</a>
          </FooterLink>
          <FooterLink>
            <a href="https://fonts.google.com/specimen/Inconsolata">Inconsolata:400,700</a>
          </FooterLink>
        </FooterColumn>
      </FooterContainer>
    )

  }
}



