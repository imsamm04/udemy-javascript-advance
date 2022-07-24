// var n = 3;

// var n = 10;

// console.log(num);

// num = 6;
// console.log(sum(3, 4));
// function sum(a, b) {
//     var c = a + b
//     return c;
// }

// console.log(c);

// console.log(sum(2,3));
// var sum = function (a, b) {
//     return a + b;
// }

// sum(2, 3);

// function sum(...numberList) {
//     return numberList.reduce((total, number) => total + number, 6)
// }

// const numberList = [2, 4, 6];
// console.log(sum(...numberList));

// function sum () {} // function declaration

// const sum = function() {} // function expression

// const sum = () => {} // arrow function


// function Student(id, name) {
//     this.name = name;
//     this.id = id;
//     this.sayHello = function () {
//         console.log('my name is', this.name);
//     }
// }



// const lucy = new Student(1, 'lucy');

// lucy.sayHello();

//object destructuring

// const Student = {
//     id: 1,
//     name: 'lucy'
// }

// const {id, name} = Student 

// //array ddestructuring

// const numberList = [5, 10, 15];
// const [a, b] = numberList;

// console.log(b);


// sum(1,2,3);

// function sum(...numberList) {
//     // var numberList =  a + b + c;
//     return numberList.reduce((total, number)=>total + number , 0);
// }


// console.log(sum(1,2,3));

// const numberList = [2, 4, 6];

// Sum(1,2,numberList)


// function sum(x) {
//     return function(y){
//         return x + y;
//     }
// }

// // sum(x)(y);
// console.log(sum(2)(3));

// function demo() {
//     console.log('123');
//     function child() {
//         console.log('abc');
//     }
// }


// demo()


function parent() {
    var a = 0;
    return function () {
        console.log('-----', a++);
    }
}
var child = parent()
child();
child();
child();