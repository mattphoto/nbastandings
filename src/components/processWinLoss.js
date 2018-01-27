export default function ( winLossString ) {

  if (Array.isArray(winLossString)) { return [0,100]}

  const winLossArray = 
    winLossString
    .replace(/\s+/g, '').split('-')
  return winLossArray;
}
