import React, { Component } from 'react';

import loadingIcon from '../assets/loading.svg';
import { StandingsTableRow } from './StandingsTableRow';

import {
  StandingsContainer,
  LoadingScreen,
  BaseTableHead,
  TableViewDescription,
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

    const { conferenceData, isLoading, conf } = this.props;
    const otherConfTitle = conf === 'West' ? 'East' : "West" ;

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
            width: '100%',
            overflowX: 'auto'
          }}>
          <thead>
            <tr>
              <BaseTableHead colSpan="3">Team</BaseTableHead>
              <BaseTableHead style={{textAlign: 'right', width: '50px'}}>GB</BaseTableHead>
              <BaseTableHead 
                style={{
                  textAlign: 'right', 
                  width: '50px',
                  paddingRight: '0'
                }}
              >Pts<br/>Dif</BaseTableHead>
              <BaseTableHead>W&ndash;L</BaseTableHead>
              <BaseTableHead>Last<br/>10</BaseTableHead>
              <BaseTableHead>Home</BaseTableHead>
              <BaseTableHead>Away</BaseTableHead>
              <BaseTableHead>Conf</BaseTableHead>
              <BaseTableHead>vs<br/>{otherConfTitle}</BaseTableHead>
              <BaseTableHead>Games<br/>&lt; 3pts</BaseTableHead>
              <BaseTableHead>Games<br/>&gt; 10pts</BaseTableHead>
              <BaseTableHead>vs.<br/>&gt; .500</BaseTableHead>
              <BaseTableHead>OT</BaseTableHead>
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
        <TableViewDescription>
          Color and intensity of cell background indicate the difference between
          the win loss record in the each cell vs. a team's overall record by 
          percentages.
        </TableViewDescription>
      </StandingsContainer>
    )

  }
}


