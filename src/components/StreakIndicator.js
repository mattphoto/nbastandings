import React, { Component } from 'react';
import times from 'lodash.times';

import {
  StreaksContainer,
  StreakDot,
} from './styles';

export class StreakIndicator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      dataArr: [],
    };
  }

  render() {

    const { streak } = this.props;
    const streakCount = Math.abs(streak) > 15 ? 15 : Math.abs(streak);
    const direction = ( streak > 0 ) ? 'flex-start' : 'flex-end';

    return (
      <StreaksContainer direction={direction}>
        { 
          times(streakCount, (index) => {
            return (
              <StreakDot streak={streak} key={index+'SI'}/>
            );
          } )
        }
      </StreaksContainer>
    )
  }

}