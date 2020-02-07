// Code your solution in this file!
const returnFirstTwoDrivers = function(d){
    return d.slice(0,2)
}
const returnLastTwoDrivers = function(d){
    return d.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(mu){
    return function(va){
        return mu * va;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returndArray){
    return returndArray(drivers);
}