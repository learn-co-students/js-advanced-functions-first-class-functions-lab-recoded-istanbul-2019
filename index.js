// Code your solution in this file!
 const returnFirstTwoDrivers=arr=>{
    return arr.slice(0,2)
}

const returnLastTwoDrivers=arr=>{
    return arr.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier=(a)=> {
    return function(b) {
        return a * b
    }
}

const fareDoubler = (a)=> {
    return createFareMultiplier(2)(a)
}

const fareTripler = (num2) =>{
    return createFareMultiplier(3)(num2)
}

selectDifferentDrivers=(arrDrivers, func)=>{
    return func(arrDrivers)
} 