// check if an object is empty (mean have no keys)

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// console.log(isEmpty({id: 4}));

// get average mark of an object
// calcAvgMark ({math: 10, enghlish : 8}) -> 9

function calcAvgMark (mark) {
    const length = Object.keys(mark).length;
    let sum = 0;

    for(const key in mark) {
        const value = mark[key];
        sum += value;
    }
    return sum / length;
}
// console.log(length);
console.log(calcAvgMark({math: 5, english: 6}));