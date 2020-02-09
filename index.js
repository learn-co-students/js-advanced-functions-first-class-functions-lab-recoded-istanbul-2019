// Code your solution in this file!


function returnFirstTwoDrivers(arr){
   const anonFn = (function(arr){return [arr[0],arr[1]] })(arr)
   return anonFn
}


function returnLastTwoDrivers(arr){
    const anonFn = (function(arr){return [arr[arr.length-2],arr[arr.length-1]]})(arr)
    return anonFn
 
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(val){
    return (function multi(val){return val*5})
}


function fareDoubler(fee){
    return fee*2
}

function fareTripler(fee){
    return fareDoubler(fee)*3/2
}

function selectDifferentDrivers(arr, fn){
    return fn(arr)
}

