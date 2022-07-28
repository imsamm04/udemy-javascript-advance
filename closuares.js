
// function findMaxEach(numberList) {
//   if(!Array.isArray(numberList) || numberList.length === 0) return undefined;
//   let max = numberList[0];
//   numberList.forEach((number)=>{
//     if(number > max) {
//       max = number
//     }
//   })
// return max;
// }

// console.log(findMaxEach([2,11,3,9,4,5]));

// const numberList = [1, 11, 3, 5, 2, 7, 10];
// // const equal = numberList.filter(x => x % 2 === 0);
// // const equal = numberList.filter((x) => x % 2 === 0)
// // const equal = numberList.filter((x) => x <= 4 || x % 5 === 0)
// // console.log(equal);


// const softArr = numberList.sort()
// console.log(softArr);
// const numberList = [2, 5, 3, 1,10];
// const arr = numberList.sort(); // [1, 2, 3, 5]
// console.log(arr);

const numbers = [4, 2, 100, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);