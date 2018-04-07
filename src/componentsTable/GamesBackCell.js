

// export const getBackgroundColor = ( winLossString, reference ) => {
//   let winLoss = winLossString;
//   let smallSampleFactor = 1;
//   let winDelta = calculateDelta( winLoss, reference * smallSampleFactor);
//   if ( winDelta > 0 ) {
//     winDelta = winDelta > upperClip ? upperClip : winDelta;
//     return blueGrade[winDelta];
//   } else {
//     winDelta = winDelta < lowerClip ? lowerClip : winDelta;
//     return redGrade[Math.abs(winDelta)];
//   }
// }

import React, { Component } from 'react';

import {
  calcGBBackgroundColor,
} from '../utilityFunctions';

import {
  GamesBackCellStyle,
} from '../components/styles';

export class GamesBackCell extends Component {

  render() {

  const {
    datum,
    midGB,
    lastGB,
    hovered,
  } = this.props;

  return (
    <GamesBackCellStyle 
      bgColor={ calcGBBackgroundColor( datum, midGB, lastGB ) }
      hovered={hovered}
    >
      {datum}
    </GamesBackCellStyle>
  )
  }
}