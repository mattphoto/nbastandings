import React, { Component } from 'react';
import { teamAssets } from './teamAssets';
import times from 'lodash.times';

import {
  gamesBackRowHeight,
  ConferenceHeader,
  StandingsContainer,
  GamesBackRow,
  TeamTile,
  StreaksContainer,
  StreakDot,
} from './styles';


import {
  mainContainerWidth,
} from './constants';


export class StreakIndicator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataArr: [],
    };
  }

  render() {

    const { streak } = this.props;
    const streakCount = Math.abs(streak) > 15 ? 15 : Math.abs(streak);
    const direction = ( streak > 0 ) ? 'flex-start' : 'flex-end';

    return (
      <StreaksContainer direction={direction}>
        { 
          times(streakCount, () => {
            return (
              <StreakDot streak={streak} />
            );
          } )
        }
      </StreaksContainer>
    )
  }

}