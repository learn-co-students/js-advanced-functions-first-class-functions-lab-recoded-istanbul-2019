// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function(fare) {
        return number * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}

done();