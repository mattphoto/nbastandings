import React, { Component } from 'react';

import {
  ConferenceHeader,
  ConferenceHeadButton,
} from './styles';

export class ConferenceHead extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { conf } = this.props;
    const confBGColor = conf === "West" ? "#1D42BA" : "#C8102E" ;
    const cardinal = conf === "West" ? "Western" : "Eastern" ;

    return (
      <ConferenceHeader confBGColor={ confBGColor }>
        2017 &ndash; 2018 NBA { cardinal } Conference Standings
        <ConferenceHeadButton>traditional view</ConferenceHeadButton>
      </ConferenceHeader>
    )
  }
}