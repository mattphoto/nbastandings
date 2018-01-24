import styled from 'styled-components';

import {
  mainContainerWidth,
  gamesBackRowFactor,
  gamesBackRowHeight,
  leftMargin,
} from './constants';

const teamTitleWidth = (mainContainerWidth - 84) / 4

export const PlayoffTeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PlayoffTeams = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlayoffHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${gamesBackRowHeight}px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #FFF;
  background: #999;
  margin-bottom: 10px;
`
export const PlayoffTeamRank = styled.div`
  font-weight: 
    ${props => props.rank < 5 ? 600 : 400 };
  display: flex;
  align-items: center;
  padding: 4px;
`
export const PlayoffTeamRecord = styled.div`
  font-family: 'Inconsolata'; 
  font-weight: 400;
  font-size: 13px;
  margin-left: auto;
`
export const PlayoffTeamTileStyle = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Open Sans';
  font-weight: 400;
  border: 1px solid #CCC;
  padding: 0 10px 0 4px;
  width: 130px;
  background: #FFF;
  margin-bottom: ${props => props.rank < 5 ? 1 : 8 }px;
`
export const PlayoffBracketContainer = styled.div`
  position: absolute;
  top: ${gamesBackRowHeight / 2}px;
  right: ${leftMargin + 6}px;
  width: 310px;
  font-family: 'Open Sans';
  font-weight: 400;
  z-index: 0;
  padding: 12px 12px 4px 12px;
  background: #F1F1F1;
  border: 1px solid #CCC;
  box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
`
export const StandingsContainer = styled.div`
  position: relative;
  width: ${mainContainerWidth}px;
  margin 0 auto;
  border: 1px solid #DDD;
  margin-bottom: ${gamesBackRowHeight}px;
`
export const GamesBackRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #CCC;
  background-image: linear-gradient(180deg, #EEE 20%, #fff 100%);
  height: ${gamesBackRowHeight}px;
  font-size: 18px;  
  font-weight: 800;
  padding: 0 10px;
`
export const TeamTile = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  display: flex;
  align-items: center;
  background: ${props => props.color};
  height: ${gamesBackRowHeight * gamesBackRowFactor}px;
  width: ${teamTitleWidth}px;
  font-size: 30px;
  font-weight: 800;
  color: #FFF;
  padding: 0 10px;
  z-index: ${props => props.z};
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.5);
  border-left: 6px solid ${props => props.secondaryColor};
`
export const ConferenceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${mainContainerWidth}px;
  height: ${gamesBackRowHeight * 1.2 }px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin 0 auto;
  color: #FFF;
  background: ${props => props.confBGColor};
  margin-bottom: 4px;
`
// C8102E

// 1D42BA

// myArray.slice(0).reverse().map(function(...




        // { test.filter((team) => {
        //     return team[5] === 'West';
        //   })
        //   .map( (team) => 
        //   (
        //   <TeamTile top={ (team[37] * 30) } z={ Math.round(5000 / team[7])} >
        //     {team[7]} 
        //     <img 
        //       height="40"
        //       src={ GSW }/>
        //     {team[4]} 
        //   </TeamTile>
        //   )
        // )}

//  box-shadow: ${props => (props.z + 0 < 5) ? "6px 6px 6px 0px rgba(0,0,0,0.5)" : "none"}



// ||
// ( (filteredData[i][37] - lastGamesBackRow >= 2) 
//   && ( currentLeftPosition === leftMargin  ) )
