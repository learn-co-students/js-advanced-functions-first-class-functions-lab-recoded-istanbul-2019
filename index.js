// Code your solution in this file!
function returnFirstTwoDrivers(arr){
  return [...arr].slice(0,2)
}
function returnLastTwoDrivers(arr){
  return [...arr].slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(bir){
  return iki=> bir*iki;
}
const fareQuintupler = createFareMultiplier(4)
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, f){
  return f(arrayOfDrivers)
}
