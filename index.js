// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};


const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


const createFareMultiplier = function(arg) {
    return function(num){
        return arg * num
    }
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}


