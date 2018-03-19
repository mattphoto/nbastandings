import React, { Component } from 'react';

import {
  ConferenceHeader,
  ConferenceHeadButton,
} from './styles';

export class ConferenceHead extends Component {
  render() {

    const { conf, toggleView, standingsView } = this.props;
    const confBGColor = conf === "West" ? "#C8102E" : "#1D42BA" ;
    const cardinal = conf === "West" ? "Western" : "Eastern" ;
    const confButtonText = standingsView ? "tiles view" : "table view"

    return (
      <ConferenceHeader confBGColor={ confBGColor }>
        2017 &ndash; 2018 NBA { cardinal } Conference Standings
        <ConferenceHeadButton onClick={toggleView}>
          { confButtonText }
        </ConferenceHeadButton>
      </ConferenceHeader>
    )
  }
}