// greeting by personal name and lastname 
// let firstName = 'Sahil';
// let lastName = 'pawar';
// console.log(`hello ${firstName} ${lastName} welcome to our hotel`)

// greeting by gender 
// let gender = 'women';
// if (gender === 'man'){
//     console.log("welcome sir to our hotel")
// }else if(gender === 'women'){
//     console.log("welcome mam to our hotel")
// }

// print 0-1000
// let ans = 0;
// for (let i = 0; i < 1001; i++){
//     ans = ans + i; 
// }
// console.log(ans)

// Even number print in the array
// let arr = [1, 2, 3, 4, 22, 52, 6, 7, 8, 9, 10]
// for (i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//         console.log(arr[i])
//     }
// }

// Creating object 
// let person = [{
//     firstName : 'sahil',
//     lastName : 'pawar',
//     gender : 'male',
//     age : 23,
// },{
//     firstName : 'priya',
//     lastName : 'patil',
//     gender : 'female',
//     age : 22,
// },{
//     firstName : 'rudra',
//     lastName : 'salunke',
//     gender : 'male',
//     age : 25,
// }]
// for (let i = 0 ; i < person.length; i++ ){
//     if (person[i]['gender'] == 'male'){
//         console.log(person[i]['firstName'])
//     }
// }

// Creating function 
// function sum (a, b){
//     return a + b;
// }
// console.log(sum(5, 7))
// console.log(sum(5, 2))

// Creating functions and call in one function 
// function sum(val1, val2, fnToCall){
//     let result = val1 + val2;
//     fnToCall(result);
// }

// function displayResult(data){
//     console.log(`the sum of two value is ` + data)
// }

// function displayResultPassive (data){
//     console.log(`Sum's result is :` + data)
// }

// console.log(sum(4, 5, displayResultPassive))

// const str = 'sahil prakash pawar';
// console.log(str.replace('sahil', 'sham'))

// Learning the date month year. 
// const currentDate = new Date ();

// console.log(`Todays Date is : ` + currentDate.getDate())
// console.log(`This Month is : ` + currentDate.getMonth() + 1)
// console.log(`This Year is : ` + currentDate.getFullYear())

// console.log(`current date is : ` + currentDate)

// let frontEnd = ['HTML', 'CSS', 'JavaScript']
// let backEnd = ['MongoDB', 'Express', 'React']
// let fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

// function personDetails(){
//     return{
//         firstName : 'sahil',
//         lastName : 'pawar',
//         age : 22,
//         country : 'India',
//         state : 'Maharashtra'
//     }
   

// };
// const person= new personDetails();
// console.log(person.state)

// loop 
// let ans = 0;

// for ( let i = 0; i <= 50; i++){
//     ans = ans + i;
// }
// console.log(ans)

// Function 
// function findSum (n){
//     ans = 0;
//     for (let i = 0; i <= n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }
// console.log(findSum(25))

// Function in another function 
// function square(n){
//     return n * n;
// }
// function cube(n){
//     return n * n * n;
// }

// Sum of square
// function sumOfSquare (a, b){
//     let val1 = square(a);
//     let val2 = square(b);

//     return val1 + val2;
// }

// // Sum of cube
// function sumOfCube (a, b){
//     let val1 = cube(a);
//     let val2 = cube(b);

//     return val1 + val2;
// }
// console.log(sumOfSquare(1,2))
// console.log(sumOfCube(2,2))

// Callback function 
// function square(a){
//     a * a 
// }

// function someOfThing(a, b, fn){
//     let val1 = fn(a);
//     let val2 = fn(b);
//     return val1 + val2
// }
// console.log(someOfThing(2, 2, cube))

// Async Function 

// function sum (n){
//     let ans = 0;
//     for (let i = 0; i < n; i++){
//         ans =  ans + i;
//     }
//     return ans;
// }
// function tillSum100(){
//     return sum(100)
// }
// setTimeout (tillSum100, 5000)
// console.log('Hello world')

// Read file using async function 
// const fs = require("fs");
// //File module
// fs.readFile("data.txt", "utf-8", function(err, data){
//     console.log(data)
// })

// Learning promises function 
// const fs = require("fs");
// function readDataFile(){
//     return new Promise(function(resolve){
//         fs.readFile("data.txt", 'utf-8', function(err, data) {
//             resolve(data)
//         });
//     })

// }

// function onDone(data){
//     console.log(data)
// }
// readDataFile().then(onDone);

// return promises 
// let d = new Promise(function(resolve){
//     resolve("foo");
// })
// function Callback(){
//     console.log(d)
// };
// d.then(Callback)


//Learning the promises to print the message after 2 second
// function sahil(){
//     let p =new Promise(function(resolve){
//         setTimeout(resolve, 2000)
//     });
//     return p;
// }
// const value = sahil();
// value.then(function(){
//     console.log("Hi there")
// })

// function funSahil(){
//     let d = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hi there")
//         }, 2000)
        
//     });
//     return d;
// }
// async function main (){
//     let value = await funSahil()
//     console.log(value)
// }
// main()


// Revision of callback functions 
// function square (n){
//     return n * n
// }
// function cube(n){
//     return n * n * n
// }
// function quad(n){
//     return n * n * n * n
// }
// function sumOfSomething(a, b, fn){
//     let val1 = fn(a)
//     let val2 = fn(b)
//     return val1 + val2;
// }
// const result = sumOfSomething(1, 2, quad);
// console.log(result)


// async function 
// const fs = require("fs");
// let a = 0;
// console.log(a);

// fs.readFile( 'data.txt', 'utf-8', function(err, data){
//     console.log("Reading data from the file is : ")
//     console.log(data)
// })


// let ans = 0;
// for (let i = 0; i < 10; i++){
//     ans = ans + i
// }
// console.log(ans);


// let ans = 0;
// setTimeout(function(){
//     console.log("Total addition of first 10 numbers is : " + ans )
// }, 20000)

// for (let i = 0; i < 10; i++){
//     ans = ans + i
// }

// Creating setTimeout inside the setTimeout function
setTimeout(function(){
    console.log("hi this is from sahil")
    setTimeout(function(){
        console.log("hi there it's from inside the sahil")
    }, 2000)
}, 1000)

