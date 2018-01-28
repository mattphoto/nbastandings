import React, { Component } from 'react';

import { PlayoffTeamTile } from './PlayoffTeamTile';

import {
  PlayoffBracketContainer,
  PlayoffHeader,
  PlayoffTeamsContainer,
  PlayoffTeams,
} from './styles';

export class PlayoffsBracket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.hoverPlayoff = this.hoverPlayoff.bind(this);
    this.hoverOutPlayoff = this.hoverOutPlayoff.bind(this);
  }

  hoverPlayoff() {
    this.setState({ hovered: true })
  }

  hoverOutPlayoff() {
    this.setState({ hovered: false })
  }

  render() {

    const { conferenceData } = this.props;
    if (!conferenceData.length) {return null;}

    return (
      <PlayoffBracketContainer 
        onMouseEnter={ this.hoverPlayoff }
        onMouseLeave={ this.hoverOutPlayoff }
        hovered={this.state.hovered}
      >
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



