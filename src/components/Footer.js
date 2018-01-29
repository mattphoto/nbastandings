import React, { Component } from 'react';

import {
  StandingsContainer,
  MouseOverMessage,
  FooterContainer,
  FooterLogo,
  FooterColumn,
} from './styles';

import {
  gamesBackRowFactor,
} from './constants';

export class Footer extends Component {
  render() {

    return (
      <FooterContainer >
        <FooterColumn>
          bballstandings.com
          <div
            style={{ marginTop: '60px', fontWeight: '400', fontSize: '14px' }}
            
          >
                    Comments? Email: <a href="mailto:bball@rueif.com">Matt</a>

          </div>
        </FooterColumn>
        <FooterColumn>

        </FooterColumn>
        <FooterColumn>

        </FooterColumn>

        <FooterColumn>
          Made in San Jose, California
          NBA by Nick Bottmley
          Create React App
          Styled-Components
          Hosted at: surge.sh

        </FooterColumn>

      </FooterContainer>
    )

  }
}



