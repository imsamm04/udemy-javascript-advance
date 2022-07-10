// random a number in range ò [0, n]
// random a number in range ò [a, b] vs a < b
// min a
// range: b-a
// [10, 100]
// 10
// 100 - 10 = 90


 function randomNumberRange (a, b) {
    if ( a >= b) return -1;

    const random = Math.random() * (b-a) ;
    return Math.round(random) + a;
 }
 
 console.log(randomNumberRange(10, 100));