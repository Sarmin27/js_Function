function doubleOrTriple (number,doDouble ){
    if(doDouble==true){
        const result=number*2;
        return result;
    }
    else{
        const result=number*3;
        return result;
    }
}
console.log(doubleOrTriple(5,true));
console.log(doubleOrTriple(5,false));




// array
function numberOfElement(numbers){
    const len=numbers.length;
    return len;
}
const array=numberOfElement([1, 2, 3, 4, 5, 6, 7]);
console.log(array);





