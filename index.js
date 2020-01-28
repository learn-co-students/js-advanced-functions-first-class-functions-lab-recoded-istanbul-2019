// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  }
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(num) {

    const fareMultiplier = function (num2) {
      return num*num2;
    }
  
    return fareMultiplier;
  }
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
  };