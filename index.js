// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = function(drivers){
    let firstTwo = drivers.filter(function(el , index){
        return index < 2;
    })
    return firstTwo
    
}



const returnLastTwoDrivers = function(drivers){
    return drivers.filter(function(el , index){
        return index > drivers.length -3;
    })
}


let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]


function createFareMultiplier(a){
    return function(){
        return a *a;
    }
}

const fare = createFareMultiplier();


function fareDoubler(fare){
    return fare *2;
}

function fareTripler(fare){
    return fare *3;
}

function selectDifferentDrivers(drivers , fnc){
    return fnc(drivers);
}
