/*Function : A block of code.
-A set of statement that performs a task when it is called.
-maintains a relationship with input and output.
*/
//improve code-
//1.reusability
//2.readability


const number=20;

// function structure
//function declare
/*function functionName() {

}
*/

function fanOff(){           //function declare
    console.log('Fan off koro');
}

//function use ...>> jokhn jokhn proijon pore tokhn i function k call korlei kaj hoye jai easily
//output pete chaile function k call korte hobe
fanOff();//function call


// function vs loop 
/*
loop:loop jokhn suru hoi tokhn se sathe sathe bar bar chole jodi kono karone off kora hoi tahole loop oikhanei end
but function ek tana kaj kore na jokhn proijon pore tokhn ekta nam diye call korte pari.

*/


// function syntax
function numbersum(x,y){
    sum=x+y;
    return sum;
}
const result =numbersum(10,15);
console.log(result);

/***
 * here, function=function keyword;
 * numbersum=function name
 * (x,y)=perameter list
 * {
 *   function body;
 * }
 * return=return keyword
 * result=function call
 * (10,15)=arguments list
 * 
 */


/***
 * Function parameter, function return
 * Has return & Has parameter.
 * No return & Has parameter.
 * Has return & no parameter.
 * No return & No parameter.
 */