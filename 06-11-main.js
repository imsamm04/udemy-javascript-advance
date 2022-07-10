// 1. get the one of a nmber having 3 digits
// 2. Get the tens of a number having 3 digits
// 3. Get the hundreds of a number 3 digits
// 4. Sum all digits of a number having 3 digits

// function extracTheOnes (n) {
//     if (n.toString().length !== 3) return -1;
//     return n %  10;
// }

// console.log(extracTheOnes(127));

// 2. Get the tens of a number having 3 digits

// function extracTheTens (n) {
//     if (n.toString().length !== 3) return -1;
//     return Math.trunc((n%100)/10);
// }

// console.log(extracTheTens(177));

// 4. Sum all digits of a number having 3 digits

function sumDigits(n) {
    if (n.toString().length !== 3) return -1;

    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);
    return ones + tens + hundreds;
}

console.log(sumDigits(523));


// function getTaxiCount(passengerCount) {
//     if (passengerCount <= 0) return -1;
//     if (passengerCount > 1 && passengerCount < 4) {
//         return "1 xe 4 cho"
//     }
//     if (passengerCount > 4 && passengerCount < 10) {
//         return "2 xe , 1 xe 4 cho, 1 xe 7 cho)"
//     }
//     if (passengerCount > 10) {
//         return "3 xe 7 cho"
//     }

// }
// console.log(getTaxiCount(15));

// function bigNumberDigits(n) {
//     if (n.toString().length !== 3) return -1;
//     const ones = n % 10;
//     const tens = Math.trunc((n % 100) / 10);
//     const hunders = Math.trunc(n / 100);

//     let max = hunders;
//     if (max < tens) max = tens
//     if (max < ones) max = ones
//     return max
// }

// console.log(bigNumberDigits(193));


// function compareNumber(a, b) {
//     if (a > b) return 1
//     if (a === b) return 0
//     if (a < b) return -1
// }
// console.log(compareNumber(7,3));