// Code your solution in this file!
let returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
  }

  let returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
  }

  let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  let createFareMultiplier = function(int){
      return function(fare){
          return int*fare;
      }
  }

  let fareDoubler = createFareMultiplier(2);
  let fareTripler = createFareMultiplier(3);
  function selectDifferentDrivers(arr, func){
    return func(arr);
  }

