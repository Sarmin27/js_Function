function isOdd(number){
    if(number%2==1){
        return true;
    }
    return false;
}

const odd=isOdd(46);
console.log(odd);//false
const odd2=isOdd(51);
console.log(odd2);//true