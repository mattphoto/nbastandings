import React, { Component } from 'react';

import {
  PlayoffTeamTileStyle,
  PlayoffTeamRank,
  PlayoffTeamRecord,
} from './styles';

export class PlayoffTeamTile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataArr: [],
    };
  }


  render() {

    const { conferenceData, rank } = this.props;
    const index = rank - 1;

    return (
      <PlayoffTeamTileStyle rank={rank}>
        <PlayoffTeamRank rank={rank}>
          { rank } 
          <img 
            height="24"
            src={ conferenceData[index].assets[3] }
            alt={ conferenceData[index].assets[0] }
          />
          { conferenceData[index].assets[0]}
        </PlayoffTeamRank>
        <PlayoffTeamRecord>
          { conferenceData[index].record }
        </PlayoffTeamRecord>
      </PlayoffTeamTileStyle>
    )
  }
}



