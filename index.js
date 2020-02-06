// Code your solution in this file!

function returnFirstTwoDrivers(array){
   let newArray = array.slice(0,2);
   return newArray;
}

function returnLastTwoDrivers(array){
    let newArray = array.slice(-2);

    return newArray;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(){
        return fare * 4 + fare
    }
}


function fareDoubler(f){
    return f * 2;
}

function fareTripler(f){
    return f * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}