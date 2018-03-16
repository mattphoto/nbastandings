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
    hovered,
  } = this.props;

  let bgColorCalc = getBackgroundColor(datum, reference);
  let fontWeightCalc = Math.abs(calculateDelta(datum, reference)) || 0;
  if ( datum.trim() === '0-1' || datum.trim() === '1-0') { 
    bgColorCalc = '#F7F7F7';
    fontWeightCalc = 0;
  }

  return (
    <WinRateDeltaCell 
      bgColor={bgColorCalc}
      fontWeight={fontWeightCalc}
      hovered={hovered}
    >
      {datum}
    </WinRateDeltaCell>
  )
  }
}