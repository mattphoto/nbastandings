export default function ( winLossString ) {

  if (Array.isArray(winLossString)) { return [0,0]}

  let winLossArray = winLossString.replace(/\s+/g, '').split('-');

  winLossArray[0] = parseInt(winLossArray[0], 10);
  winLossArray[1] = parseInt(winLossArray[1], 10);

  return winLossArray;
}
