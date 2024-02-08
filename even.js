// function evenNumbers(numbers){
//     console.log(numbers);
//     const evens=[];
//     for(const num of numbers){
//         //console.log(num)
//         if(num%2==0){
//             //console.log(num);
//             evens.push(num);
          
//         }
//     }
//     return evens; 
// }
// const nums=[10, 11, 12, 13, 14, 15, 16]
// const number=evenNumbers(nums);
// console.log(evenNumbers(nums));


function evenNumbers(numbers){
    console.log(numbers);
    let sum=0;
    for(const num of numbers){
        //console.log(num)
        if(num%2==0){
            //console.log(num);
            sum=sum+num;
            
          
        }
    }
    return sum; 
}
const nums=[10, 11, 12, 13, 14, 15, 16]
const number=evenNumbers(nums);
const sum=evenNumbers(nums);
console.log('Even numbers sum:',sum);
