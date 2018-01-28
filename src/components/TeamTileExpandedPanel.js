import React, { Component } from 'react';
import {TeamBarGraphElement} from './TeamBarGraphElement';

import {
  TeamTileExpandedContainer,
  BarGraphHeader,
} from './styles';

import processWinLoss from './processWinLoss'

export class TeamTileExpandedPanel extends Component {

  render() {
    const { 
      name,
      oct,
      nov,
      dec,
      jan,
      feb,
      mar,
      apr,
      last10,
    } = this.props;

    return (
      <div>
        <TeamTileExpandedContainer {...this.props}>

          <TeamBarGraphElement 
            value={ processWinLoss(oct) }
            month={ 'oct' }
            { ...this.props }
          />
          <TeamBarGraphElement 
            value={ processWinLoss(nov) }
            month={ 'nov' }
            { ...this.props }
          />
          <TeamBarGraphElement 
            value={ processWinLoss(dec) }
            month={ 'dec' }
            { ...this.props }
          />
          <TeamBarGraphElement 
            value={ processWinLoss(jan) }
            month={ 'jan' }
            { ...this.props }
          />
          <TeamBarGraphElement 
            value={ processWinLoss(feb) }
            month={ 'feb' }
            { ...this.props }
          />
          <TeamBarGraphElement 
            value={ processWinLoss(mar) }
            month={ 'mar' }
            { ...this.props }
          />
          <TeamBarGraphElement 
            value={ processWinLoss(apr) }
            month={ 'apr' }
            { ...this.props }
          />
          <BarGraphHeader>
            <span style={{ fontWeight: '800' }}>{ name }&nbsp;</span>
            Win
            <span style={{ fontWeight: '800' }}>% &nbsp;</span>
            by Month
          </BarGraphHeader>
        </TeamTileExpandedContainer>
      </div>
    )
  }

}