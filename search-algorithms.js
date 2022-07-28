function findIndex(numberList, target) {
    if (!Array.isArray(numberList) || numberList.length === 0) return -1;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number === target) return i;
    }
    return -1;
}

console.log(findIndex([1,2,5,9,-4,45], 9));