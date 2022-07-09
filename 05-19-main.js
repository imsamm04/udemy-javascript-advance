//write a funtion to classify studant
// Recieve mark as a number , output as below:
//mark > 8 -> 'Exellence'
//7 <= mark <= 8 -> good
//4 <= mark <= 6 -> not good
// mark < 4 -> bad

//using wtichcase

function classifyStudent(mark) {
    let result;

    switch (mark) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: {
            result = 'Not good'
            break;
        }
        case 6:
        case 7:
        case 8: {
            result = 'Good'
            break;
        }
        case 10: {
            result = 'Excellence'
            break;
        }
        
        default:
            result = "Invalid mark"
    }
    return result
}

console.log(classifyStudent(6));
// console.log(classifyStudent(7));
// console.log(classifyStudent(5));
// console.log(classifyStudent(2));
