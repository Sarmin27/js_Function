 /***
  * objective :write a function to give me the sum of all numbers in an array.
  * step-1.declare a function
  * step-2.call check whether the function is called properly
  * step-3.set a parameter.(s)
  * step-4.pass the perameter(s),check whether parameter is passed in a proper format.
  * step-5:do the function tasks(step by step)
  * 
  */
 
 function sumOfNumbers(numbers){
    console.log(numbers);
    let sum=0;
    for(const numb of numbers){
        console.log(numb);
        sum=sum+numb;
    }
    return sum;

       
 } 
 const numbs=[54, 62, 12, 6];
 const num=sumOfNumbers(numbs);
 const sum=sumOfNumbers(numbs);
 console.log('sum of numbers is',sum);
