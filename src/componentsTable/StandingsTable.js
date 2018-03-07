import React, { Component } from 'react';

import loadingIcon from '../assets/loading.svg';
import { WinRateTableCell } from './WinRateTableCell';
import { StandingsTableRow } from './StandingsTableRow';

import {
  processWinLoss, 
  calculateWLPercentage,
  calculateDelta,
} from '../utilityFunctions';

import {
  StandingsContainer,
  LoadingScreen,
  WinRateDeltaCell,
  BaseTableCell,
  TableCell,
} from '../components/styles';

import {

} from '../components/styles';


export class StandingsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: -1
    };
    this.hoverTeamRow = this.hoverTeamRow.bind(this);
    this.hoverOutTeamRow = this.hoverOutTeamRow.bind(this);
  }
  hoverTeamRow( index ) {
    this.setState({ hoveredIndex: index})
  }
  hoverOutTeamRow() {
    this.setState({ hoveredIndex: -1})
  }

  render() {

    const { conferenceData, isLoading } = this.props;

    if (!conferenceData || isLoading ) {
      return (
        <LoadingScreen>
          <img src={ loadingIcon } alt="loading icon" />
          <p>loading &hellip;</p>
        </LoadingScreen>
      );
    }

    return (
      <StandingsContainer >
        <table 
          style={{ 
            borderCollapse: 'collapse',
            border: '1px solid #333',
            width: '100%',
          }}>
          <thead>
            <tr>
              <th colSpan="3" style={{borderBottom: '2px solid black'}}>Team</th>
              <th style={{borderBottom: '2px solid black'}}>GB</th>
              <th style={{borderBottom: '2px solid black'}}>PtD</th>
              <th style={{borderBottom: '2px solid black'}}>Rec</th>
              <th style={{borderBottom: '2px solid black'}}>L10</th>
              <th style={{borderBottom: '2px solid black'}}>Hom</th>
              <th style={{borderBottom: '2px solid black'}}>Awy</th>
              <th style={{borderBottom: '2px solid black'}}>Con</th>
              <th style={{borderBottom: '2px solid black'}}>East</th>
              <th style={{borderBottom: '2px solid black'}}>&lt; 3pts</th>

              <th style={{borderBottom: '2px solid black'}}>FG%</th>
              <th style={{borderBottom: '2px solid black'}}>Rebs</th>
              <th style={{borderBottom: '2px solid black'}}>TOVs<br/>bob</th>
              <th style={{borderBottom: '2px solid black'}}>vs.</th>
              <th style={{borderBottom: '2px solid black'}}>vs.</th>
            </tr>
          </thead>
          <tbody>

          { conferenceData.map( (team, index) => 
            (
              <StandingsTableRow
                hoverTeamRow={ this.hoverTeamRow.bind(this, index) }
                hoverOutTeamRow={ this.hoverOutTeamRow }
                team={ team }
                index={ index }
                hoveredIndex={ this.state.hoveredIndex }
                key={ index+'str'}
              />
            )
          )}
          </tbody>
        </table>
      </StandingsContainer>
    )

  }
}


