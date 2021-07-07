// Code your solution in this file!

const returnFirstTwoDrivers= function(driversArr){
    return driversArr.slice(0,2);
}
const returnLastTwoDrivers= function(driversArr){
    return driversArr.slice(2);
    }
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier =(times)=> {
   let multipliyer =(fare)=>{return times*fare};
   return multipliyer;
}

const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(array,twoDrivers){
    return twoDrivers(array);
}

console.log(selectDifferentDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'],returnFirstTwoDrivers))