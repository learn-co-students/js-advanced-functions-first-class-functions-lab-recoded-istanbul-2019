// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
   return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function() {
        return fare * fare
    }
}

const fareDoubler = function fareDoubler(fare) {
    return fare * 2
}

const fareTripler = function fareTripler(fare) {
    return fare * 3
}
function selectDifferentDrivers(arrayDr, fun ){
   if(fun===returnFirstTwoDrivers)
  return returnFirstTwoDrivers(arrayDr);
  if(fun===returnLastTwoDrivers)
  return returnLastTwoDrivers(arrayDr);
 }