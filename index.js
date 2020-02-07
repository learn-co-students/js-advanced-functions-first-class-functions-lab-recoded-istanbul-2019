// Code your solutowtion in this file!
const returnFirstTwoDrivers = function(arr){
    return [arr[0],arr[1]]
}
// Code your solutowtion in this file!
const returnLastTwoDrivers = function(arr){
    return [arr[arr.length-2],arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const selectDifferentDrivers= function (arr,fn){return fn(arr)}

function createFareMultiplier(){
    return function(num){
        return num*num
    }
}
function fareDoubler(params) {
    return params * 2
}
function fareTripler(params) {
    return params * 3
}