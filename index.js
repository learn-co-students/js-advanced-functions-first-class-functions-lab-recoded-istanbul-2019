// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]]
}
const returnLastTwoDrivers = function(array) {
    return [array[2], array[3]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2
    }
}
const fareDoubler = function(num2) {
    return createFareMultiplier(2)(num2)
}

const fareTripler = function(num2) {
    return createFareMultiplier(3)(num2)
}

function selectDifferentDrivers(arrDrivers, eitherFunction) {
    return eitherFunction(arrDrivers)
}

