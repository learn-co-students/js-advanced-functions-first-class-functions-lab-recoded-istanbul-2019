// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (arr) => arr.slice(0, 2);

const returnLastTwoDrivers = (arr) => arr.slice(2, 4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiply) => (fare) => fare*multiply;

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers)
