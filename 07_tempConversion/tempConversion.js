const ftoc = function(ftemp) {
  let cConversion = (ftemp - 32) * (5/9);
  let cRound = Math.round(cConversion * 10) / 10;
  return cRound;
};

const ctof = function(ctemp) {
  //let fConversion = (ctemp * (9 / 5) + 32);
  return Math.round(((ctemp * 9 / 5) + 32)* 10) / 10;

  //let fRound = Math.round(fConversion * 10) / 10;
 // return fRound;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
