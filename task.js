/***
 * Task-1
Take four parameters. Multiply the four numbers and then return the result.
 */

// function multiNumbers(num1,num2, num3, num4){
//     const result=num1*num2*num3*num4;
//     return result;

// }
// const result=multiNumbers(10,10,10,10)
// console.log(result);


/***
 Task-2
Take a number if the number is odd multiply it by 2 and return the result.
If the number is even divide it by two and return the result.
 */

function multiDivide(number){
    if (number%2==1){
        return number*2;
    }
    else{
        return number/2;
    }
}
console.log( 'the number is odd:',multiDivide(13));
console.log('the number is even:',multiDivide(12));

/***
 * Task-3
Write a function called make_avg() 
which will take an array of integers and the size of that array and return the average of those values.
 */
function make_avg(numbers){
    console.log(numbers);
    let count=0;
    let sum=0;
    for(const number of numbers){
        console.log(number)
        sum=sum+number;
        count=numbers.length;
            
    }
    console.log(count);
    console.log('Total',sum);
    const avg=sum/count;
    return avg;

}
const array=[5, 10, 15, 20]
const result=make_avg(array);
const avg=make_avg(array);
console.log(avg);


/***
*Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string
which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
function count_zero(binaryString){
   // console.log(binaryString);
    let count=0;
    for(const str of binaryString ){
       // console.log(str);
        if( str ==='0'){
            count =count+1;

        }
        
    }
    return count;


}
//count_zero('01010101');
console.log(count_zero('00'))


/***
* Task-5
Write a function called odd_even() 
which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */
function odd_even(number){

   
        if(number %2 === 0){

           return 'even'
        }
       

        else{
            
           return 'odd'
          
        }    
    }

odd_even(10);
console.log(odd_even(11));

