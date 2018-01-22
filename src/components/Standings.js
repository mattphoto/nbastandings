import React, { Component } from 'react';
import { teamAssets } from './test';

import { GamesBackRows } from './GamesBackRows';

import {
  TeamTile,
  StandingsContainer
} from './styles';


import {
  gamesBackRowFactor,
} from './constants';


export class Standings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataArr: [],
    };
  }


  render() {

    const { conferenceData } = this.props;

    if (!conferenceData) {return null;}

    const numberOfGamesBackRows = 
    conferenceData.length 
      ? Math.floor(conferenceData[conferenceData.length-1].gamesBack) + gamesBackRowFactor + 1
      : 1;

    console.log('data state', this.state.dataArr, this.state.data)

    return (
      <StandingsContainer >

        <GamesBackRows numberOfGamesBackRows={numberOfGamesBackRows}/>


        { conferenceData.map( (team, index) => 
          (
          <TeamTile 
            top={ team.top } 
            left = { team.left }
            z={ team.zindex } 
            color={ team.assets[1]}
            secondaryColor={ team.assets[2] }
            key={ team.assets[0] }
          >
            { index + 1 } 
            <img 
              height="44"
              src={ team.assets[3] }
              alt={ team.assets[0] }
            />

            <span style={{ color: "rgba(255,255,255,.8" }}>{ team.assets[0] }</span> &nbsp;
            <span style={{ fontFamily: "Inconsolata" }}>{ team.record }</span>
          </TeamTile>
          )
        )}

      </StandingsContainer>
    )






  }
}



