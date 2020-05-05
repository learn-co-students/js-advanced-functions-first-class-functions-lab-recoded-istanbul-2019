const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];
function createFareMultiplier(x) {
    return function FareMultiplier() {
        return x * x;
    }
}
const fareDoubler = function (x) {
    return x * 2
}
const fareTripler = function (x) {
    return x * 3
}

function selectDifferentDrivers(arrayOfDrivers, func) {

    return func(arrayOfDrivers);

}