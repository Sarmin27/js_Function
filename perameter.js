//3---> 3*3=9
//4--->4*4=16
//5--->5*5=25
 
//number=perameter ;eta k bahire theke access kora jaina...function er vetorer dike ekta variable declare kore deya eta k perameter bole.
function square(number){
    console.log('value of the number perameter:',number);
    const square=number*number;
    console.log('square of the given number is:',square);

}

square(4);
console.log('-------------------------------------')
square(12);
console.log('------------------------------------')
square(405);



function add(num1, num2){
    const num=num1+num2;
    console.log('addition 2 number:',num);
}
add(5,70);
add(90,10);


function addAll(a,b,c,d){
    console.log(a,b,c,d);//Output: 10 20 30 undefined
    const total=a+b+c+d;
    console.log(total);
}
addAll(10,20,30);//output :NaN [karon function e 4 ta perameter declare kora hoyeche ami 3 ta value pass korechi tai ]
addAll(10,20,30,50);//argument-->ja diye call kora hocche tai

function greet(name, age) {
    console.log("Hello, " + name + "! You are " + age + " years old.");//output:Hello, Alice! You are undefined years old
  }
  
  greet("Alice");//sudu name dara call kora hoyeche ...age dara nah.
  
  
//   function declare 
  function subtraction(num1,num2){
    const sub=(num1-num2);
    console.log(sub);
  }
  subtraction(10,5);//function k call korchi