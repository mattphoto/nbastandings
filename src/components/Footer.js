import React, { Component } from 'react';

import {
  FooterContainer,
  FooterLogo,
  FooterColumn,
  FooterHeader,
  FooterLink,
} from './styles';

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
          <FooterHeader>sites</FooterHeader>
          <FooterLink>
            <a href="http://www.nba.com/standings#/" target="_blank">
              NBA.com Standings
            </a>
          </FooterLink>
          <FooterLink>
            <a href="http://www.tankathon.com/" target="_blank">
              Tankathon
            </a>
          </FooterLink>
          <FooterLink>
            <a href="https://cleaningtheglass.com/" target="_blank">
              Cleaning The Glass
            </a>
          </FooterLink>
          <FooterLink>
            <a href="https://projects.fivethirtyeight.com/2018-nba-predictions/?ex_cid=bballstandings" target="_blank">
              FiveThirtyEight NBA Predictions
            </a>
          </FooterLink>
          <FooterLink>
            <a href="https://fansided.com/nba/the-step-back/nylon-calculus/" target="_blank">
              Nylon Calculus
            </a>
          </FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeader>colophon</FooterHeader>
          <FooterLink>
            <a href="https://github.com/facebook/create-react-app" target="_blank">
              create-react-app
            </a>
          </FooterLink>
          <FooterLink>
            <a href="https://www.styled-components.com/" target="_blank">
              Styled-Components
            </a>
          </FooterLink>
          <FooterLink>
            <a href="https://github.com/bttmly/nba" target="_blank">
              bttmly / nba
            </a>
          </FooterLink>
          <FooterLink>
            <a href="http://surge.sh/" target="_blank">
              surge.sh
            </a>
          </FooterLink>
          <FooterLink>
            <a href="https://fonts.google.com/specimen/Open+Sans" target="_blank">
              Open+Sans:400,600,800
            </a>
          </FooterLink>
          <FooterLink>
            <a href="https://fonts.google.com/specimen/Inconsolata" target="_blank">
              Inconsolata:400,700
            </a>
          </FooterLink>
        </FooterColumn>
      </FooterContainer>
    )

  }
}
