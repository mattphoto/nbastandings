import React, { Component } from 'react';

import {
  BarGraphContainer,
  BarGraphWinSegment,
  BarGraphLossSegment,
  BarGraphZeroSegment,
  BarGraphWinZeroSegment,
} from './styles';

export class TeamBarGraphElement extends Component {

  render() {

    const { 
      primaryColor,
      value,
      month
    } = this.props;

    return (
      <div>
        { (value[0] > 0 ) &&
          <BarGraphContainer>
            <BarGraphLossSegment
              height={value[1]}
            />
            <BarGraphWinSegment
              primaryColor={primaryColor}
              height={value[0]}
            >
              {value[0]}-{value[1]}
            </BarGraphWinSegment>
            <div>{month}</div>
          </BarGraphContainer>
        }
        { (value[0] === 0 && value[1] > 0) &&
          <BarGraphContainer>
            <BarGraphLossSegment
              height={100}
            />
            <BarGraphWinZeroSegment
              primaryColor={primaryColor}
              height={0}
            >
              {value[0]}-{value[1]}
            </BarGraphWinZeroSegment>
            <div>{month}</div>
          </BarGraphContainer>
        }
        { (value[0] === 0 && value[1] === 0) &&
          <BarGraphContainer>
            <BarGraphLossSegment
              height={100}
            />
            <BarGraphZeroSegment
              height={0}
            >
            </BarGraphZeroSegment>
            <div>{month}</div>
          </BarGraphContainer>
        }
      </div>
    )
  }

}