// check if an object is empty (mean have no keys)

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// console.log(isEmpty({id: 4}));

// get average mark of an object
// calcAvgMark ({math: 10, enghlish : 8}) -> 9

// function calcAvgMark (mark) {
//     if(!mark) return -1;
//     const length = Object.keys(mark).length;
//     let sum = 0;

//     for(const key in mark) {
//         const value = mark[key];
//         sum += value;
//     }
//     return (sum / length).toFixed(1);
// }
// console.log(calcAvgMark({math: 5.9, english: 6}));

function calcAvgMark (mark) {
    if(!mark) return -1;
    const length = Object.keys(mark).length;
    let sum = 0;
    for(const key in mark) {
       
        const value = mark[key];
        sum += value;
    }
    return (sum/length).toFixed(1)
     // let sum = 10;
}
// let sum = 8;
// console.log(sum);
console.log(calcAvgMark({math: 4, english : 7}));