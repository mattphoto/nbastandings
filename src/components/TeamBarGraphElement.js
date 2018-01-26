import React, { Component } from 'react';

import {
  TeamTileExpandedContainer,
  TeamTileExpandedContent,
  BarGraphContainer,
  BarGraphWinSegment,
  BarGraphLossSegment,
} from './styles';

export class TeamBarGraphElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { streak } = this.props;

    return (
      <div>
        <BarGraphContainer>
          <BarGraphLossSegment>
          </BarGraphLossSegment>
          <BarGraphWinSegment>
            30
          </BarGraphWinSegment>
          <div>OCT</div>
        </BarGraphContainer>
      </div>
    )
  }

}