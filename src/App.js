import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';
import ReactGA from 'react-ga';

import { Standings } from './components/Standings';
import { Footer } from './components/Footer';

import { 
  ConferenceHeader,
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
    ReactGA.initialize('UA-113355224-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);

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

//#ff0081
  render() {
    console.log('confs', this.state.data, this.state.dataEast)

    const { dataWest, dataEast } = this.state;

    return (
      <div>
        <ConferenceHeader confBGColor="#1D42BA">
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
        <Footer/>
      </div>
    );
  }
}

export default App;
