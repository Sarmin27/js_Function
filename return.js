function tenTimes(number){
    const result=number*10;
    return result;
}
tenTimes(5);
const output=tenTimes(5);
console.log('output :',output);//j sokol function k call korle  return kore segulo k function er bahire amra store kore rakhte pari.
const bigNumber=tenTimes(99);
console.log('Output:',bigNumber);


function doMath(num1,num2){
    const sum=num1+num2;
    const sub=num1-num2;
    const multi=sum*sub;
    const result=multi/2;
    return result;
}
//const result=doMath(100,50);
console.log(doMath(100,50));
console.log(doMath(100,10));

