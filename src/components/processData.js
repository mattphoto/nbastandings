import { teamAssets } from './teamAssets';

import {
  gamesBackRowHeight,
  gamesBackRowFactor,
  leftMargin,
  leftPositionIncrement,
} from './constants';

export default function ( data, conf ) {

  const otherConfIndex = conf === 'West' ? 59 : 63 ;
    
  let conference = [];
  const filteredData = data.rowSet.filter((team) => {
    return team[5] === conf;
  })
  .sort( (a, b) => {
    return a[7] - b[7];
  });

  let lastGamesBackRow = 0;
  let currentLeftPosition = leftMargin - leftPositionIncrement;

  for (let i=0 ; i < filteredData.length; i++ ) {
    let teamObj = {};
    let teamName = ( filteredData[i][4] !== "Trail Blazers")
      ? filteredData[i][4]
      : 'blazers';

      console.log('filteredData[i][4]', filteredData[i][4], teamName)

    teamObj.confRecord = filteredData[i][6];
    teamObj.otherConf = filteredData[i][otherConfIndex]
    teamObj.vsHome = filteredData[i][17];
    teamObj.vsAway = filteredData[i][18];
    teamObj.last10 = filteredData[i][19];
    teamObj.last10Home = filteredData[i][20];
    teamObj.last10Away = filteredData[i][21];
    teamObj.percentage = filteredData[i][14];
    teamObj.threePts = filteredData[i][23];
    teamObj.tenPts = filteredData[i][24];
    teamObj.oppOver500 = filteredData[i][52];
    teamObj.ot = filteredData[i][22];
    teamObj.city = filteredData[i][3];
    teamObj.ptsDiff = filteredData[i][58];
    teamObj.name = teamName;
    teamObj.record = filteredData[i][16];
    teamObj.gamesBack = filteredData[i][37];
    teamObj.zindex = 16 - filteredData[i][7];
    teamObj.top = filteredData[i][37] * gamesBackRowHeight;
    teamObj.assets = teamAssets[teamObj.name];
    teamObj.currentStreak = filteredData[i][35];
    teamObj.last10 = filteredData[i][19].trim();
    teamObj.oct = filteredData[i][76] || [0,0];
    teamObj.nov = filteredData[i][77] || [0,0];
    teamObj.dec = filteredData[i][78] || [0,0];
    teamObj.jan = filteredData[i][67] || [0,0];
    teamObj.feb = filteredData[i][68] || [0,0];
    teamObj.mar = filteredData[i][69] || [0,0];
    teamObj.apr = filteredData[i][70] || [0,0];

    if ( (filteredData[i][37] - lastGamesBackRow >= gamesBackRowFactor + 1)
      ||
      ( (filteredData[i][37] - lastGamesBackRow >= gamesBackRowFactor) 
        && ( currentLeftPosition === leftMargin  ) )
      ||
      ( currentLeftPosition > leftPositionIncrement * 3  ) )
      
    {
      currentLeftPosition = leftMargin;
      lastGamesBackRow = filteredData[i][37]
    } else {
      currentLeftPosition = currentLeftPosition + leftPositionIncrement;
    }
    teamObj.left = currentLeftPosition;
    conference.push(teamObj)

    // console.log( 'standings', teamObj.assets[0], 
    //   teamObj.confRecord, teamObj.otherConf, 
    //   'home', teamObj.vsHome,
    //   'away', teamObj.vsAway,
    //   teamObj.last10,
    //   teamObj.last10Home,
    //   teamObj.last10Away,



    //   );

  }
  return conference;
}
