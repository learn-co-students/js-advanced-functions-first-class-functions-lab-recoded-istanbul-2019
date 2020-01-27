// Code your solution in this file!
function returnFirstTwoDrivers(driversArr) {
    let array = []
    for (let index = 0; index < 2; index++) {
        const element = driversArr[index];
        array.push(element)

    }
    return array
}

function returnLastTwoDrivers(driversArr) {
    let array = []
    array.push(driversArr[driversArr.length - 2]);
    array.push(driversArr[driversArr.length - 1])
    return array
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function() {
        return fare * fare
    }
}

const fareDoubler = function fareDoubler(fare) {
    return fare * 2
}

const fareTripler = function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(driversArr, func) {
    return func(driversArr)
}