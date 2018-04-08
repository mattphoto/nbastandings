import React, { Component } from 'react';

import {
  calcGBBackgroundColor,
  padZero,
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
      bgColor={calcGBBackgroundColor( datum, midGB, lastGB )}
      hovered={hovered}
    >
      { padZero(datum) }
    </GamesBackCellStyle>
  )
  }
}