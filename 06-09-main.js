// 1 write a  function too check if a number is odd/even

function isEven(n) {
    if (n < 0) return "false";
    if (n % 2 == 0) return 1

}

function isOdd(n) {
    if (n < 0) return "false";
    if (n % 2 !== 0) return 1

}

// console.log( isOdd(-4));

// write a funtion to check if a number is divisible by 5

function isDivisibleBy5 (n) {
    return n % 5 === 0
}

// so chinh phuong

function isPerfectSquare (n) {
    if (n<=0) return false;

    const sqrtN = Math.sqrt(n);
    const sqrtInt = Math.trunc(sqrtN);
    return sqrtInt * sqrtInt === n;

}

//25
//5
//sqrt = 5
//5*5 = 25 (so chinh phuong)

//20
//4,xxxx
//sqrtint = 4
// 4*4 not equal 20

console.log(isPerfectSquare(24));