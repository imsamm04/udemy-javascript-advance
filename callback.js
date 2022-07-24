// function process(number1, number2, callback) {
//     callback(number1,number2)
// }

// process(1,9, function(number1,number2){
//     //plus
//     console.log('number1+number2',number1+number2);
// })


function myFunction(param) {
    // console.log(param);
    param();
}

function myCallback(value){
    console.log('abc');
}

myFunction(myCallback)