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

// 
const currentDate = new Date ();

console.log(`Todays Date is : ` + currentDate.getDate())
console.log(`This Month is : ` + currentDate.getMonth() + 1)
console.log(`This Year is : ` + currentDate.getFullYear())

console.log(`current date is : ` + currentDate)