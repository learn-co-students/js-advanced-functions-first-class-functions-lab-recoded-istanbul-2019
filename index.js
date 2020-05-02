// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = (drivers) => {
    let [first, second] = drivers;
    let newArr = [first, second];
    return newArr;
}

const returnLastTwoDrivers = (drivers) => {
    let [, , ltwo, lone] = drivers;
    let newArr = [ltwo, lone];
    return newArr;
}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

/*const createFareMultiplier = (int) => {
    const fareMultiplier = (int) => int * int;
    const fareQuintupler = (int) => int * 5;
    const fareDoubler = (int) => int * 2;
    const fareTripler = (int) => int * 3;
    return fareMultiplier
}*/
const createFareMultiplier = (int) => {
    fareMultiplier(int);
    fareQuintupler(int);
    fareDoubler(int);
    fareTripler(int);
    return fareMultiplier;

}
const fareMultiplier = (int) => int * int;
const fareQuintupler = (int) => int * 5;
const fareDoubler = (int) => int * 2;
const fareTripler = (int) => int * 3;

const selectDifferentDrivers = (drivers, func) => func(drivers)

