import { teamAssets } from './teamAssets';

import {
  gamesBackRowHeight,
  gamesBackRowFactor,
  leftMargin,
  leftPositionIncrement,
} from './constants';

export default function ( data, conf ) {
    
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

    teamObj.city = filteredData[i][3];
    teamObj.name = filteredData[i][4];
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
  }
  return conference;
}
