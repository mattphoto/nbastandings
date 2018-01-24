import React, { Component } from 'react';

import { GamesBackRows } from './GamesBackRows';
import { PlayoffTeamTile } from './PlayoffTeamTile';

import {
  PlayoffBracketContainer,
  PlayoffHeader,
  PlayoffTeamsContainer,
  PlayoffTeams,
} from './styles';

import {
  gamesBackRowFactor,
} from './constants';


export class PlayoffsBracket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataArr: [],
    };
  }


  render() {

    const { conferenceData } = this.props;
    if (!conferenceData.length) {return null;}

    return (
      <PlayoffBracketContainer>
        <PlayoffHeader>Playoff Bracket</PlayoffHeader>
        <PlayoffTeamsContainer>
          <PlayoffTeams>
            <PlayoffTeamTile conferenceData={conferenceData} rank={1}/>
            <PlayoffTeamTile conferenceData={conferenceData} rank={8}/>
            <PlayoffTeamTile conferenceData={conferenceData} rank={4}/>
            <PlayoffTeamTile conferenceData={conferenceData} rank={5}/>
          </PlayoffTeams>
          <PlayoffTeams>
            <PlayoffTeamTile conferenceData={conferenceData} rank={2}/>
            <PlayoffTeamTile conferenceData={conferenceData} rank={7}/>
            <PlayoffTeamTile conferenceData={conferenceData} rank={3}/>
            <PlayoffTeamTile conferenceData={conferenceData} rank={6}/>
          </PlayoffTeams>
        </PlayoffTeamsContainer>
      </PlayoffBracketContainer>
    )
    
  }
}


