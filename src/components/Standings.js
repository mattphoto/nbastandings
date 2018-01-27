import React, { Component } from 'react';

import { GamesBackRows } from './GamesBackRows';
import { PlayoffsBracket } from './PlayoffsBracket';
import { StreakIndicator } from './StreakIndicator';
import { TeamTilesPlot } from './TeamTilesPlot';

import {
  TeamTile,
  StandingsContainer,
  RankStyle,
} from './styles';

import {
  gamesBackRowFactor,
} from './constants';

export class Standings extends Component {
  render() {

    const { conferenceData } = this.props;

    if (!conferenceData) {return null;}

    const numberOfGamesBackRows = 
    conferenceData.length 
      ? Math.floor(conferenceData[conferenceData.length-1].gamesBack) + gamesBackRowFactor + 1
      : 23;

    return (
      <StandingsContainer >
        <GamesBackRows numberOfGamesBackRows={numberOfGamesBackRows}/>
        <TeamTilesPlot conferenceData={conferenceData}/>
        <PlayoffsBracket conferenceData={conferenceData}/>
      </StandingsContainer>
    )

  }
}



