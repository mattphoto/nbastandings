import React, { Component } from 'react';

import loadingIcon from '../assets/loading.svg';
import { WinRateTableCell } from './WinRateTableCell';

import {
  processWinLoss, 
  calculateWLPercentage,
  calculateDelta,
} from '../utilityFunctions';

import {
  WinRateDeltaCell,
  TeamRankCell,
  BaseTableCell,
  TeamNameCell,
  TableCell,
  RecordCell,
} from '../components/styles';

import {

} from '../components/styles';


export class StandingsTableRow extends Component {

  render() {

    const {
      hoverTeamRow,
      hoverOutTeamRow,
      team,
      index,
      hoveredIndex
    } = this.props;

    const hovered = (index === hoveredIndex || index + 1 === hoveredIndex);
    const hoveredRow = (index === hoveredIndex);

    return (
      <tr key={index+"trtb"}
        onMouseEnter={ hoverTeamRow }
        onMouseLeave={ hoverOutTeamRow }
      >
        <TeamRankCell 
          style={{width: '34px'}}
          hovered={hovered}
          hoveredRow={hoveredRow}
          rank={index}
        >
          { index + 1 }         
        </TeamRankCell>
        <BaseTableCell 
          style={{width: '46px', textAlign: 'center'}}                 
          hovered={hovered}
          hoveredRow={hoveredRow}
        >
          <img 
            height="36"
            src={ team.assets[3] }
            alt=""
          />
        </BaseTableCell>
        <TeamNameCell style={{width: '44px'}}                
          hovered={hovered}
          hoveredRow={hoveredRow}
          rank={index}
        >
          {team.assets[0] }
        </TeamNameCell>
        <RecordCell
          style={{width: '54px', textAlign: 'right', fontWeight: 600}}
          hovered={hovered}
          hoveredRow={hoveredRow}
        >
          {team.gamesBack }
        </RecordCell>
        <RecordCell
          style={{width: '54px', 
            textAlign: 'right', 
          }}
          hovered={hovered}
          hoveredRow={hoveredRow}
        >
          {team.ptsDiff }
        </RecordCell>
        <RecordCell
          hovered={hovered}
          hoveredRow={hoveredRow}
        >
          {team.record}
        </RecordCell>
        <WinRateTableCell
          hovered={hovered}
          datum={team.last10}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.vsHome}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.vsAway}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.confRecord}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.otherConf}
          reference={team.percentage}
        />
        <WinRateTableCell                
          hovered={hovered}
          hoveredRow={hoveredRow}
          datum={team.record}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.last10}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.vsHome}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.vsAway}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.confRecord}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.otherConf}
          reference={team.percentage}
        />
      </tr>
    )






  }
}