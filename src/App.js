import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';
import ReactGA from 'react-ga';

import { Standings } from './components/Standings';
import { StandingsTable } from './componentsTable/StandingsTable';
import { Footer } from './components/Footer';
import { ConferenceHead } from './components/ConferenceHead';
import processData from './components/processData'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataWest: [],
      dataEast: [],
      isLoading: true,
      standingsView: true,
    };
    ReactGA.initialize('UA-113355224-1');
    ReactGA.pageview(window.location.pathname);

    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount() {
    NBA.stats.leagueStandings()
      .then( results => {
        return results.resultSets[0];
      })
      .then( function (data) {
        this.setState( function () {
          return {
            dataWest: processData(data, "West"),
            dataEast: processData(data, "East"),
            data: data,
            isLoading: false,
          }
        })
      }.bind(this))

    // NBA.stats.boxScore({GameID: "0021700976"})
    //   .then( results => {
    //     return results;
    //   })
    //   .then( function (data) {
    //     console.log('BOXSCORE', data);
    //   }.bind(this))

    // NBA.stats.scoreboard({gameDate: "03/12/2018"})
    //   .then( results => {
    //     return results;
    //   })
    //   .then( function (data) {
    //     console.log('BOXSCORE', data);
    //   }.bind(this))

  }

  toggleView() {
    this.setState({ standingsView: !this.state.standingsView})
  }

  render() {

    const { dataWest, dataEast, isLoading, standingsView } = this.state;

    return (
      <div>
        <ConferenceHead 
          conf="East" 
          standingsView = {standingsView}
          toggleView={this.toggleView}
        />
        { !standingsView &&
          <Standings conferenceData={ dataEast } isLoading={isLoading}/>
        }
        { standingsView &&
          <StandingsTable conferenceData={ dataEast } isLoading={isLoading}/>
        }
        <ConferenceHead 
          conf="West" 
          standingsView = {standingsView} 
          toggleView={this.toggleView}
        />
        { !standingsView &&
          <Standings conferenceData={ dataWest } isLoading={isLoading}/>
        }
        { standingsView &&
          <StandingsTable conferenceData={ dataWest } isLoading={isLoading} conf={'West'}/>
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
