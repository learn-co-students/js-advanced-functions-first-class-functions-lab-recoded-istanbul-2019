// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(arr.length-2,arr.length)
}

let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(fare){return num*fare}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr,fun){
  return fun(arr)
}