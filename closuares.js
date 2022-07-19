// function init() {
//     var name = 'abc'
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }

// init();



// function init() {
//     var name = "abc";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunction = init();
// myFunction();



function makeFunction() {
    var name = 'abc';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunction = makeFunction();
myFunction();