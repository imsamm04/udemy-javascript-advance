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