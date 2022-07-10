//1. conver hours to seconds

// function converHoursToSeconds(hours) {
//     if (hours <= 0) return -1
//     const SECONDS_PER_HOURS = 3600;
//     return hours * SECONDS_PER_HOURS;
// }

//2 given 3 numbers, fund max
function findMax(a, b, c) {
    let max = -1;
    //check with b, c
    if ( b > max) max = b;
    if ( b > max) max = b;
    if (c > max) max = c;

    return max;
}

// console.log(findMax(1,5,3));

//3 given 3 numbers , find max even number

function findMaxEvenNumber(a, b, c) {
    let max = -1;
    //check with b, c
    if ( a % 2 === 0 && a > max) max = a;
    if ( b % 2 === 0 && b > max) max = b;
    if ( c % 2 === 0 && c > max) max = c;

    return max;
}

console.log(findMaxEvenNumber(5,-3,7));