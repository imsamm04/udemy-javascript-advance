
function findMaxEach(numberList) {
  if(!Array.isArray(numberList) || numberList.length === 0) return undefined;
  let max = numberList[0];
  numberList.forEach((number)=>{
    if(number > max) {
      max = number
    }
  })
return max;
}

console.log(findMaxEach([2,11,3,9,4,5]));