import React, { Component } from 'react';

import { WinRateTableCell } from './WinRateTableCell';
import { GamesBackCell } from './GamesBackCell';
import { padZero } from '../utilityFunctions';
import { CURRENT_SEASON } from '../components/constants';

import {
  TeamRankCell,
  BaseTableCell,
  TeamNameCell,
  RecordCell,
} from '../components/styles';

export class StandingsTableRow extends Component {

  render() {

    const {
      hoverTeamRow,
      hoverOutTeamRow,
      team,
      index,
      hoveredIndex,
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
        <TeamNameCell style={{width: '60px'}}                
          hovered={hovered}
          hoveredRow={hoveredRow}
          rank={index}
        >
          <a href={ "http://www.nba.com/" 
            + team.name.toLowerCase()}
            target="_blank"
          >
          {team.assets[0] }
          </a>
        </TeamNameCell>
        <GamesBackCell
          datum={team.gamesBack}
          hovered={hovered}
          {...this.props}
        />
        <RecordCell
          style={{
            width: '34px', 
            textAlign: 'right',
            fontFamily: 'Open Sans',
            fontSize: '17px',
          }}
          hovered={hovered}
          hoveredRow={hoveredRow}
        >
          {padZero(team.ptsDiff)}
        </RecordCell>
        <RecordCell
          hovered={hovered}
          hoveredRow={hoveredRow}
        >
          {team.record}
        </RecordCell>
        { CURRENT_SEASON === '2018-19' &&
        <WinRateTableCell
          hovered={hovered}
          datum={team.last10}
          reference={team.percentage}
        />
        }
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
          datum={team.threePts}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.tenPts}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.oppOver500}
          reference={team.percentage}
        />
        <WinRateTableCell
          hovered={hovered}
          datum={team.ot}
          reference={team.percentage}
        />
      </tr>
    )






  }
}