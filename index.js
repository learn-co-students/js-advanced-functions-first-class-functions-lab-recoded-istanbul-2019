// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
 function returnFirstTwoDrivers(drivers)
 {
   return [drivers[0],drivers[1]];
 }
function returnLastTwoDrivers(drivers)
 {
   return [drivers[drivers.length-2],drivers[drivers.length-1]];
 }
 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
 
//   function createFareMultiplier(pass)
// {
//   return function(pass2)
//   {
//     let result=1;
//     for(let i=0;i<pass2;i++)
//     result*= pass;
//     return result;
//   }
    
// }
// createFareMultiplier(5)(2);
 
 
 
  function createFareMultiplier(pass)
 {
   return function(pass2)
   {
     return pass*pass2;
   }
    
 }
 createFareMultiplier(5)(2);
 
 //--------
 function fareDoubler(pass){
   return createFareMultiplier(2)(pass);
 }
 fareDoubler(10);
 
  //--------
 function fareTripler(pass){
   return createFareMultiplier(3)(pass);
 }
 fareTripler(10);
 
 
 //----------
// const a=returnFirstTwoDrivers;
// const a=returnLastTwoDrivers;
 function selectDifferentDrivers(arrayDr, fun ){
   if(fun===returnFirstTwoDrivers)
  return returnFirstTwoDrivers(arrayDr);
  if(fun===returnLastTwoDrivers)
  return returnLastTwoDrivers(arrayDr);
 }
 selectDifferentDrivers(drivers,returnFirstTwoDrivers);
 
 