import React, { Component } from "react";

import {
  FooterContainer,
  FooterLogo,
  FooterColumn,
  FooterHeader,
  FooterLink,
  DesktopMessage
} from "./styles";

export class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterColumn space>
          <FooterLogo>bballstandings.com</FooterLogo>
          <FooterLink hideMobile>
            <a href="mailto:bball@rueif.com">contact</a>
          </FooterLink>
        </FooterColumn>
        <DesktopMessage>
          <p>
            bballstandings.com is a visualization of nba standings optimized for
            desktop.
          </p>
          <p>Please open the site on your computer. Thank you.</p>
        </DesktopMessage>
        <FooterColumn />
        <FooterColumn>
          <FooterHeader>sites</FooterHeader>
          <FooterLink>
            <a
              href="http://www.nba.com/standings#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NBA.com Standings
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="http://www.tankathon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tankathon
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://cleaningtheglass.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cleaning The Glass
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://projects.fivethirtyeight.com/2019-nba-predictions/?ex_cid=bballstandings"
              target="_blank"
              rel="noopener noreferrer"
            >
              FiveThirtyEight NBA Predictions
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://fansided.com/nba/the-step-back/nylon-calculus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nylon Calculus
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="http://nbawowy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              nbawowy!
            </a>
          </FooterLink>
        </FooterColumn>
        <FooterColumn hideMobile>
          <FooterHeader>colophon</FooterHeader>
          <FooterLink>
            <a
              href="https://github.com/facebook/create-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              create-react-app
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled-Components
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://github.com/bttmly/nba"
              target="_blank"
              rel="noopener noreferrer"
            >
              bttmly / nba
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="http://surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              surge.sh
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://fonts.google.com/specimen/Open+Sans"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open+Sans:400,600,800
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://fonts.google.com/specimen/Inconsolata"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inconsolata:400,700
            </a>
          </FooterLink>
        </FooterColumn>
      </FooterContainer>
    );
  }
}
