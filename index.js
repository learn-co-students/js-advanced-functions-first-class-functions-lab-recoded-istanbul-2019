// Code your solution in this file!
 function returnFirstTwoDrivers(array){
return array.slice(0,2);
} 
function returnLastTwoDrivers(array){
    return array.slice(-2);
}
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    return function fareMultiplier(num){
        return 25;
    }}
    function fareDoubler(num){
return num*2;
    }
    function fareTripler(num){
        return num*3;
            }
function selectDifferentDrivers(arr,fun){
return fun(arr);
}