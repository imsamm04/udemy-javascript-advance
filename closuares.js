// const numberList = [2, 4, 6];
// let sum = 0;
// for (let i = 0; i < numberList.length; i++) {
//  sum += numberList[i];
// }
// console.log(sum); // 12
// // the same with above but using reduce()
// numberList.reduce((sum, number) => sum + number); 

function findMax(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return undefined;
  let max = numberList[0];
  for(let i = 0; i < numberList.length; i++){
    if(numberList[i] > max) {
      max = numberList[i];
    }
  }
return max;
}

console.log(findMax([2,3,9,4,5]));