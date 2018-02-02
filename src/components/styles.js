import styled from 'styled-components';

import {
  mainContainerWidth,
  gamesBackRowFactor,
  gamesBackRowHeight,
  teamTitleWidth,
  leftMargin,
} from './constants';

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
  color: #DDD;
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
  right: ${leftMargin + 10}px;
  width: 310px;
  font-family: 'Open Sans';
  font-weight: 400;
  z-index: ${props => (props.hovered) ? 200 : 0 };

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
  padding: 4px 4px 4px 10px;
  z-index: ${props => props.hovered ? 50 : props.z};
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.5);
  border-left: 6px solid ${props => props.secondaryColor};
`
export const TeamTileExpandedContainer = styled.div`
  position: absolute;
  top: ${props => 
    props.top + gamesBackRowHeight * gamesBackRowFactor}px;
  left: ${props => props.left}px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: ${teamTitleWidth}px;
  background: rgba(255,255,255,.95);
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.5);
  border-left: 6px solid ${props => props.secondaryColor};
  font-size: 14px;
  text-transform: uppercase;
  color: #000;
  padding: 0 10px 10px 10px;
  z-index: 100;
`
export const BarGraphHeader = styled.div`
  position: absolute;
  top: 14px;
  left: 0;
  width: 280px;
  text-align: center;
  font-weight: 600;
  color: #333;
  text-shadow: #FFF 1px 1px 2px;
  z-index: 2;
`
export const BarGraphContainer = styled.div`
  position: relative;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  font-size: 12px;
`
export const BarGraphWinSegment = styled.span`
  display: flex;
  flex-grow: ${props => props.height};
  background: ${props => props.primaryColor};
  color: #FFF;
  font-size: 10px;
  text-shadow: 1px 1px 4px #666;
  width: 26px;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 6px;
  margin-bottom: 4px;
  z-index: 1;
`
export const BarGraphLossSegment = styled.span`
  display: flex;
  flex-grow: ${props => props.height};
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 6px;
`
export const BarGraphZeroSegment = BarGraphWinSegment.extend`
  background: rgba(255,255,255,0);
`
export const BarGraphWinZeroSegment = BarGraphZeroSegment.extend`
  border-bottom: 2px solid ${props => props.primaryColor};
  text-shadow: none;
  color: #000;
  font-weight: 600;
  font-size: 11px;
  padding-bottom: 3px;
`
export const BarGraph75Rule = styled.hr`
  position: absolute;
  left: 15px;
  top: 73px;
  width: 242px;
  text-align: center;
  border: 1px;
  border-top: 1px solid #CCC;
  z-index: 0;
`
export const BarGraph50Rule = BarGraph75Rule.extend`
  top: 0px;
`
export const BarGraph25Rule = BarGraph75Rule.extend`
  top: 0px;
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
  margin: 0 auto;
  color: #FFF;
  background: ${props => props.confBGColor};
  margin-bottom: 4px;
`
export const StreaksContainer = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: wrap;
  justify-content: ${props => props.direction};
  height: ${gamesBackRowHeight * gamesBackRowFactor - 8}px;
  width: 30px;
`
export const StreakDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 2px;
  background: 
    ${props => (props.streak > 0) 
      ? `rgba(0,100,0,.7)` 
      : `rgba(139,0,0,.7)` };
  border: 1px solid rgba(255,255,255,.5);
`
export const RankStyle = styled.span`
  font-size: 30px;
  text-shadow: 
    ${props => (props.index > 7) 
      ? `none` 
      : `1px 1px 4px #666` };
  color: 
    ${props => (props.index > 7) 
      ? `rgba(255,255,255,.6)` 
      : `rgba(255,255,255,1)` };
`
export const MouseOverMessage = styled.div`
  position: absolute;
  margin: 0 auto;
  top: ${gamesBackRowHeight}px;
  left: 0;
  width: 1200px;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 18px;
  color: #CCC;
  z-index: 0;
`
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: ${mainContainerWidth}px;
  margin: 0 auto;
  margin-bottom: 18px;
  padding: 20px;
  background: #DDD;
`
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${teamTitleWidth}px;
  justify-content: 
    ${props => props.space 
      ? 'space-between' 
      : 'flex-start'};
  color: #777;
  font-size: 14px;
  font-weight: 600;
`
export const FooterHeader = styled.div`
  color: #999;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 6px;
`
export const FooterLogo = styled.div`
  color: #666;
  font-size: 16px;
  font-weight: 800;
`
export const FooterLink = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 6px;
`

// .reverse().map(function(...

// "6px 6px 6px 0px rgba(0,0,0,0.5)" : "none"}

// ||
// ( (filteredData[i][37] - lastGamesBackRow >= 2) 
//   && ( currentLeftPosition === leftMargin  ) )
