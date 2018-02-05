import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';
import ReactGA from 'react-ga';

import { Standings } from './components/Standings';
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
    };
    ReactGA.initialize('UA-113355224-1');
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
            isLoading: false,
          }
        })
      }.bind(this))
  }

//#ff0081
  render() {
    console.log('confs', this.state.data, this.state.dataEast)

    const { dataWest, dataEast, isLoading } = this.state;

    return (
      <div>
        <ConferenceHead 
          conf="West"
        />
        <Standings 
          conferenceData={ dataWest }
          isLoading={isLoading}
        />
        <ConferenceHead conf="East"/>
        <Standings 
          conferenceData={ dataEast }
          isLoading={isLoading}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
