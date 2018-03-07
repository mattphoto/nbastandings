import React, { Component } from 'react';

import {
  getBackgroundColor,
  calculateDelta,
} from '../utilityFunctions';

import {
  WinRateDeltaCell,
} from '../components/styles';

export class WinRateTableCell extends Component {

  render() {

  const {
    datum,
    reference,
    bgColor,
    hovered,
  } = this.props;

  return (
    <WinRateDeltaCell 
      bgColor={getBackgroundColor(datum, reference)}
      fontColor={''}
      fontWeight={Math.abs(calculateDelta(datum, reference))}
      hovered={hovered}
    >
      {datum}
    </WinRateDeltaCell>
  )
  }
}