import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';

import { teamAssets } from './components/test';

import { 
  gamesBackRowHeight,


  ConferenceHeader,
  StandingsContainer,
  GamesBackRow,
  TeamTile,
} from './components/styles';



class App extends Component {xw

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataArr: [],
    };
  }

  componentDidMount() {
    NBA.stats.leagueStandings()
      .then( results => {
        return results.resultSets[0];
      }).then( function (data) {
        this.setState( function () {
          return {
            dataArr: this.processData(data, "West"),
            data: data,
          }
        })
      }.bind(this))
  }

  processData( data, conf ) {
    
    let conference = [];
    const filteredData = data.rowSet.filter((team) => {
      return team[5] === conf;
    })
    .sort( (a, b) => {
      return a[7] - b[7];
    });


    // vars //
    const leftMargin = 42;
    let lastGamesBackRow = 0;
    const leftPositionIncrement = 279;
    let currentLeftPosition = leftMargin - leftPositionIncrement;


    for (let i=0 ; i < filteredData.length; i++ ) {
      let teamObj = {};

      teamObj.name = filteredData[i][4];
      teamObj.record = filteredData[i][16];
      teamObj.gamesBack = filteredData[i][37];
      teamObj.zindex = 16 - filteredData[i][7];
      teamObj.top = filteredData[i][37] * gamesBackRowHeight;
      teamObj.assets = teamAssets[teamObj.name]

      if ( (filteredData[i][37] - lastGamesBackRow >= 3)
        ||
        ( (filteredData[i][37] - lastGamesBackRow >= 2) 
          && ( currentLeftPosition === leftMargin  ) )

       ) {
        currentLeftPosition = leftMargin;
        lastGamesBackRow = filteredData[i][37]
      } else {
        currentLeftPosition = currentLeftPosition + leftPositionIncrement;
      }

      teamObj.left = currentLeftPosition;

      conference.push(teamObj)
    }

    return conference;
  }

  render() {

    const gamesBackRowFactor = 2;

    let conferenceData = this.state.dataArr;

    if (!conferenceData) {return null;}
    console.log('conferenceData', conferenceData)

    const numberOfGamesBackRows = 
    conferenceData.length 
      ? Math.floor(conferenceData[conferenceData.length-1].gamesBack) + gamesBackRowFactor + 1
      : 1;

    console.log('data state', this.state.dataArr, this.state.data)


    
    return (
      <div>
        <ConferenceHeader>
          2017 &ndash; 2018 NBA Western Conference Standings
        </ConferenceHeader>
        <StandingsContainer >

          {Array.apply(null, Array(numberOfGamesBackRows)).map(function(item, i){                                        
            return (
              <GamesBackRow key={ i+'gbr' }>
                <span>{i}</span>
                <span>{i}</span>
                <span>{i}</span>
                <span>{i}</span>
              </GamesBackRow>
            );                
          }, this)}

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
      </div>

    );
  }
}

export default App;
