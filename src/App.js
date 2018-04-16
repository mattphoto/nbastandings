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
      currentSeason: '2017-18'
    };
    ReactGA.initialize('UA-113355224-1');
    ReactGA.pageview(window.location.pathname);

    this.toggleView = this.toggleView.bind(this);
    this.changeSeason = this.changeSeason.bind(this);
    this.loadSeason = this.loadSeason.bind(this);
  }

  componentDidMount() {
    this.loadSeason();
  }

  loadSeason() {
    console.log('loadseason', this.state.currentSeason)
    NBA.stats.leagueStandings({Season: this.state.currentSeason})
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
  }

  toggleView() {
    this.setState({ standingsView: !this.state.standingsView })
  }

  changeSeason(event) {
    this.setState(
      { 
        currentSeason: event.target.value,
        isLoading: true 
      }, 
    () => {this.loadSeason(this.state.currentSeason)}
    )
  }

  render() {

    const { dataWest, dataEast, isLoading, standingsView, currentSeason } = this.state;
    return (
      <div>
        <ConferenceHead 
          conf="East" 
          standingsView = {standingsView}
          toggleView={this.toggleView}
          currentSeason={currentSeason}
          changeSeason={this.changeSeason}
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
          currentSeason={currentSeason}
          changeSeason={this.changeSeason}
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
