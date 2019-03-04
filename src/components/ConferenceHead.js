import React, { Component } from "react";

import { ConferenceHeader, ConferenceHeadButton, SeasonSelect } from "./styles";

const SEASONS = {
  "2014-15": "2014 – 2015",
  "2015-16": "2015 – 2016",
  "2016-17": "2016 – 2017",
  "2017-18": "2017 – 2018",
  "2018-19": "2018 – 2019"
};

export class ConferenceHead extends Component {
  render() {
    const {
      conf,
      toggleView,
      standingsView,
      currentSeason,
      changeSeason
    } = this.props;
    const confBGColor = conf === "West" ? "#C8102E" : "#1D42BA";
    const cardinal = conf === "West" ? "Western" : "Eastern";
    const confButtonText = standingsView ? "tiles view" : "table view";

    return (
      <ConferenceHeader confBGColor={confBGColor}>
        <SeasonSelect value={currentSeason} onChange={changeSeason}>
          <option value="2014-15">2014 - 2015</option>
          <option value="2015-16">2015 - 2016</option>
          <option value="2016-17">2016 - 2017</option>
          <option value="2017-18">2017 - 2018</option>
          <option value="2018-19">2018 - 2019</option>
        </SeasonSelect>
        {SEASONS[currentSeason]} NBA {cardinal} Conference Standings
        <ConferenceHeadButton onClick={toggleView}>
          {confButtonText}
        </ConferenceHeadButton>
      </ConferenceHeader>
    );
  }
}
