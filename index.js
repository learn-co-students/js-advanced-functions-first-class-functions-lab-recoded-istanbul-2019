// Code your solution in this file!
const returnFirstTwoDrivers = array => {
    return array.slice(0, 2);
};
 const returnLastTwoDrivers = array => {
    return array.slice(array.length - 2, array.length)
 };

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 const createFareMultiplier = integer => {
    return fareInteger => {
        return fareInteger * integer;
    };
 };

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

 function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
 };