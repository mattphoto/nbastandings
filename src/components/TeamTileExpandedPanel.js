import React, { Component } from 'react';
import {TeamBarGraphElement} from './TeamBarGraphElement';

import {
  TeamTileExpandedContainer,
  TeamTileExpandedContent,
  BarGraphHeader,
} from './styles';

export class TeamTileExpandedPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { streak } = this.props;

    return (
      <div>
        <TeamTileExpandedContainer {...this.props}>
          <TeamBarGraphElement />
          <TeamBarGraphElement />
          <TeamBarGraphElement />
          <TeamBarGraphElement />
          <TeamBarGraphElement />
          <TeamBarGraphElement />
          <TeamBarGraphElement />
          <BarGraphHeader>Win Percentage by Month</BarGraphHeader>

        </TeamTileExpandedContainer>

      </div>
    )
  }

}