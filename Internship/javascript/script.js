// //variable declaration

// var a;  //global scope
// a=10;
// var a=15;
// let b;  //block scope
// b=10;
// b=20;
// const c=10; //block scope

// var p = 20; //number
// var q = "Hello";  //string
// var bool = true;  //boolean
// var r; //undefine
// var s = null;  //null
// var t = 675553489221908n;
// var sym = Symbol("Hello");
// var arr = [1,2,3,4,5];  //array
// console.log(arr);
// var obj = {
//     name:"Aksharaa",
//     age:18
// };  //object
// console.log(obj);

// //type of variable
// console.log("Type of variable");
// console.log(typeof p);
// console.log(typeof q);
// console.log(typeof bool);
// console.log(typeof r);
// console.log(typeof s);
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof sym);
// console.log(typeof t);

// //operators
// var x = 10;
// var y = "10";
// //arithmetic operators
// console.log("\nArithmetic operators");
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);

// //relational operators
// console.log("\nRelational operators");
// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x==y);
// console.log(x!=y);
// console.log(x===y);
// console.log(x!==y);

// //Assignment operators
// console.log("\nAssignment operators");
// var z = 10;
// z+=10;
// console.log(z);
// z-=10;
// console.log(z);
// z*=10;
// console.log(z);
// z/=10;
// console.log(z);
// z%=10;
// console.log(z);

// //Logical operators
// console.log("\nLogical operators");
// var m = true;
// var n = false;
// console.log(m&&n);
// console.log(m||n);
// console.log(!m);
// console.log(!n);

// //Looping
// //for loop
// console.log("\nFor loop");
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// //while loop
// console.log("\nWhile loop");
// var j = 0;
// while(j!==5){
//     console.log(j);
//     j++;
// }
// //do while loop
// console.log("\nDo while loop");
// do{
//     console.log(j);
//     j++;
// }while(j<10);

// //Conditional statements
// console.log("\nConditional statements");

// //if
// k=10;
// if(k>0){
//     console.log("k is positive");
// }

// //if else
// if(k<0){
//     console.log("k is negative");
// }else{
//     console.log("k is positive");
// }

// //if else if else
// if(k<0){
//     console.log("k is negative");
// }
// else if(k==0){
//     console.log("k is zero");
// }
// else{
//     console.log("k is positive");
// }

// //switch
// switch(k){
//     case 0:
//         console.log("k is zero");
//         break;
//     case 10:
//         console.log("k is 10");
//         break;
//     default:
//         console.log("k is not 0 or 10");
//         break;
// }
// //ternary operator
// console.log("\nTernary operator");
// var res = k>0?"k is positive":"k is negative";
// console.log(res);
// var res = k>0 ?"k is positive" : k<0 ? "k is negative" : "k is zero";
// console.log(res);

// //function
// console.log("\nFunction");
// console.log("Function without paramenter");
// function add(){
//     return 10+20;
// }
// console.log(add());
// console.log("Function with paramenter");
// function add1(a,b){
//     return a+b;
// }
// console.log(add1(10,20));
// //arrow function
// console.log("\nArrow function");
// var add2 = (a, b) => {
//     return a+b;
// };
// console.log(add2(10, 20));
// console.log(typeof add2);

// //Spread operator
// console.log("\nSpread operator");
// const u = [10,20,30];
// const v = [...u,40,50];
// console.log(u);
// console.log(v);

// //Destructuring
// console.log("\nDestructuring");
// const [name,age,marks] = ["Aksharaa",18,100];
// console.log(name);
// console.log(age);
// console.log(marks);

// //object
// const {name1,age1,marks1} = {name1:"Aksharaa",age1:18,marks1:100};
// console.log(name1);
// console.log(age1);
// console.log(marks1);

//for..in(index)
// console.log("for..in");
// var arr = [1,2,3,4,5];
// for(var i in arr){
//     console.log(i);
// }
// //for..of(values)
// console.log("for..of");
// for(var i of arr){
//     console.log(i);
// }
// //for..each
// console.log("forEach");
// arr.forEach((val,i)=>{
//     console.log(val,i);
// });

//class 
console.log("Class");
class Person{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name, this.age);
    }   
}
var p = new Person("Aksharaa", 18); 
p.print();