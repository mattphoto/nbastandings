import { blueGrade, redGrade, upperClip, lowerClip } from './components/constants';

export const processWinLoss = ( winLossString ) => {

  if (Array.isArray(winLossString)) { return [0,0]}

  let winLossArray = winLossString.replace(/\s+/g, '').split('-');

  winLossArray[0] = parseInt(winLossArray[0], 10);
  winLossArray[1] = parseInt(winLossArray[1], 10);

  return winLossArray;
}

export const calculateWLPercentage = ( winLossString ) => {
  const winLossArray = processWinLoss(winLossString);
  const winPercentage = winLossArray[0] / ( winLossArray[0] + winLossArray[1] );
  return Math.round( winPercentage * 1000) / 1000
}

export const calculateDelta = ( winLossString, reference ) => {
  const winPercentage = calculateWLPercentage(winLossString);
  return Math.round( ( winPercentage - reference ) * 100 )
}

export const getBackgroundColor = ( winLossString, reference ) => {
  let winDelta = calculateDelta( winLossString, reference);
  if ( winDelta > 0 ) {
    winDelta = winDelta > upperClip ? upperClip : winDelta;
    return blueGrade[winDelta];
  } else {
    winDelta = winDelta < lowerClip ? lowerClip : winDelta;
    return redGrade[Math.abs(winDelta)];
  }
}
