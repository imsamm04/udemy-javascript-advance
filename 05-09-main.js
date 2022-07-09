//write a funtion to classify studant
// Recieve mark as a number , output as below:
//mark > 8 -> 'Exellence'
//7 <= mark <= 8 -> good
//4 <= mark <= 6 -> not good
// mark < 4 -> bad

//version 1
function classifyStudent(mark) {
    let result;
    //checking
    if(mark > 8) result = 'exellence'
    else if (mark >= 7) result = 'good'
    else if (mark >= 4) result = 'not good'
    else result = 'bad'

    return result;
}

// //version 2
// function classifyStudent(mark) {
//     let result = 'bad';
//     //checking
//     if(mark > 8) result = 'exellence'
//     else if (mark >= 7) result = 'good'
//     else if (mark >= 4) result = 'not good'

//     return result;
// }

//version 3 (validate input)
function classifyStudent(mark) {

    if(mark < 0 || mark > 10) return 'error';
    //checking
    if(mark > 8) return 'exellence'
    else if (mark >= 7) return 'good'
    else if (mark >= 4) return 'not good'

    return 'bad';
}

console.log(classifyStudent(12));
console.log(classifyStudent(7));
console.log(classifyStudent(5));
console.log(classifyStudent(2));
