import React, { Component } from 'react';

import { GamesBackRows } from './GamesBackRows';
import { PlayoffsBracket } from './PlayoffsBracket';
import { TeamTilesPlot } from './TeamTilesPlot';
import loadingIcon from '../assets/loading.svg';

import {
  StandingsContainer,
  MouseOverMessage,
  LoadingScreen,
} from './styles';

import {
  gamesBackRowFactor,
} from './constants';

export class Standings extends Component {
  render() {

    const { conferenceData, isLoading } = this.props;

    if (!conferenceData || isLoading ) {
      return (
        <LoadingScreen>
          <img src={ loadingIcon } alt="loading icon" />
          <p>loading ...</p>
        </LoadingScreen>
      );
    }

    const numberOfGamesBackRows = 
    conferenceData.length 
      ? Math.floor(conferenceData[conferenceData.length-1].gamesBack) + gamesBackRowFactor + 1
      : 23;

    return (
      <StandingsContainer >
        <GamesBackRows numberOfGamesBackRows={numberOfGamesBackRows}/>
        <TeamTilesPlot conferenceData={conferenceData}/>
        <PlayoffsBracket conferenceData={conferenceData}/>
        <MouseOverMessage>number of games behind</MouseOverMessage>
      </StandingsContainer>
    )

  }
}



