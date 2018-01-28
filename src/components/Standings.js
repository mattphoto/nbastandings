import React, { Component } from 'react';

import { GamesBackRows } from './GamesBackRows';
import { PlayoffsBracket } from './PlayoffsBracket';
import { TeamTilesPlot } from './TeamTilesPlot';

import {
  StandingsContainer,
  MouseOverMessage,
} from './styles';

import {
  gamesBackRowFactor,
} from './constants';

export class Standings extends Component {
  render() {

    const { conferenceData } = this.props;

    // if (!conferenceData) {
    //   return (
    //     <GamesBackRows numberOfGamesBackRows={23}/>
    //   );
    // }

    const numberOfGamesBackRows = 
    conferenceData.length 
      ? Math.floor(conferenceData[conferenceData.length-1].gamesBack) + gamesBackRowFactor + 1
      : 23;

    return (
      <StandingsContainer >
        <GamesBackRows numberOfGamesBackRows={numberOfGamesBackRows}/>
        <TeamTilesPlot conferenceData={conferenceData}/>
        <PlayoffsBracket conferenceData={conferenceData}/>
        <MouseOverMessage>mouse over a team to see more</MouseOverMessage>
      </StandingsContainer>
    )

  }
}



