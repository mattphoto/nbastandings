import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';

import { teamAssets } from './components/test';
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

  render() {


    return (
      <div>
        <ConferenceHeader>
          2017 &ndash; 2018 NBA Western Conference Standings
        </ConferenceHeader>
        <Standings 
          conferenceData={ this.state.dataWest }
        />
        <ConferenceHeader>
          2017 &ndash; 2018 NBA Eastern Conference Standings
        </ConferenceHeader>
        <Standings 
          conferenceData={ this.state.dataEast }
        />

      </div>

    );
  }
}

export default App;
