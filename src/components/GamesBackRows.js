import React, { Component } from 'react';

import {
  GamesBackRow,
} from './styles';

export class GamesBackRows extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataArr: [],
    };
  }

  render() {

    const { numberOfGamesBackRows } = this.props;

    return (
      <div>
      {Array.apply(null, Array(numberOfGamesBackRows)).map(function(item, i){
        return (
          <GamesBackRow key={ i+'gbr' }>
            <span>{i}</span>
            <span>{i}</span>
          </GamesBackRow>
        );                
      }, this)}
      </div>
    )
  }
}