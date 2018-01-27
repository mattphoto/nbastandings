import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';

import { Standings } from './components/Standings';

import {
  gamesBackRowHeight,
  gamesBackRowFactor,
} from './components/constants';

import { 
  ConferenceHeader,
  StandingsContainer,
  TeamTile,
} from './components/styles';

import processData from './components/processData'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataWest: [],
      dataEast: [],
    };
  }

  componentDidMount() {
    NBA.stats.leagueStandings()
      .then( results => {
        return results.resultSets[0];
      }).then( function (data) {
        this.setState( function () {
          return {
            dataWest: processData(data, "West"),
            dataEast: processData(data, "East"),
            data: data,
          }
        })
      }.bind(this))
  }

//#1D42BA
  render() {
    console.log('confs', this.state.data, this.state.dataEast)

    const { dataWest, dataEast } = this.state;

    return (
      <div>
        <ConferenceHeader confBGColor="#ff0081">
          Golden state warriors Hanna
          2017 &ndash; 2018 NBA Western Conference Standings
        </ConferenceHeader>
        <Standings 
          conferenceData={ dataWest }
        />
        <ConferenceHeader confBGColor="#C8102E">
          2017 &ndash; 2018 NBA Eastern Conference Standings
        </ConferenceHeader>
        <Standings 
          conferenceData={ dataEast }
        />
      </div>
    );
  }
}

export default App;
