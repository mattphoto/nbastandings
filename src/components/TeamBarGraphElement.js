import React, { Component } from 'react';

import {
  TeamTileExpandedContainer,
  TeamTileExpandedContent,
  BarGraphContainer,
  BarGraphWinSegment,
  BarGraphLossSegment,
  BarGraphZeroSegment,
} from './styles';

export class TeamBarGraphElement extends Component {

  render() {

    const { 
      top, 
      left,
      primaryColor,
      secondaryColor,
      city,
      name,
      value,
      month
    } = this.props;

    console.log(primaryColor)

    return (
      <div>
        { (value[0] > 0) &&
          <BarGraphContainer>
            <BarGraphLossSegment
              height={value[1]}
            >
            </BarGraphLossSegment>
            <BarGraphWinSegment
              primaryColor={primaryColor}
              height={value[0]}
            >
              {value[0]}
            </BarGraphWinSegment>
            <div>{month}</div>
          </BarGraphContainer>
        }
        { (value[0] === 0) &&
          <BarGraphContainer>
            <BarGraphLossSegment
              height={value[1]}
            >
            </BarGraphLossSegment>
            <BarGraphZeroSegment
              primaryColor={primaryColor}
              height={value[0]}
            >
              {value[0]}
            </BarGraphZeroSegment>
            <div>{month}</div>
          </BarGraphContainer>
        }
      </div>
    )
  }

}