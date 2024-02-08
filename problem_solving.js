//1.
function calculateMoney(numOfTickets){
    if(0<=numOfTickets){
    const guardFee=500;
    let totalTicketSale=numOfTickets*120;
    let lunchFee =8*50;
    let Amount=totalTicketSale - (guardFee + lunchFee);
    return Amount;
    }
    else{
        return  'Invalid Number';
    }
}
console.log(calculateMoney(10));


//2.
function checkName(childName){
    if(typeof(childName)==='string'){
        const lastDigit=childName[childName.length-1]
        if(lastDigit === 'A' ||  lastDigit === 'a'){
        return ('Good Name');
        }
        else if(lastDigit === 'Y' ||  lastDigit === 'y'){
            return ('Good Name');
        }
        else if(lastDigit === 'I' ||  lastDigit === 'i'){
            return ('Good Name');
        }
        else if(lastDigit === 'E' ||  lastDigit === 'e'){
            return ('Good Name');
        }
        else if(lastDigit === 'O' ||  lastDigit === 'o'){
            return ('Good Name');
        }
        else if(lastDigit === 'U' ||  lastDigit === 'u'){
            return ('Good Name');
        }
        else if(lastDigit === 'W' ||  lastDigit === 'w'){
            return ('Good Name');
        }
        else {
            return ('Bad Name');
        }
    }
    else{
        return 'invalid';
    }
}
console.log(checkName('Sarmu'))

//3.
function deleteInvalids(array){
    if(Array.isArray(array)){
        const numArray=[];
        for(const value of array){
            if(typeof(value) === 'number' &&  !isNaN(value) ){
                numArray.push(value);
            }
            else{
                continue;
            }
        }
        return numArray;
    }
    else{
        return 'Invalid Array';
    }
}

//4.
function password(obj){
    const objLength = Object.keys(obj).length;
    const convertString = String(obj.birthYear);
    const birthLength = convertString.length;
    if(objLength===3 && birthLength === 4){
       const upperSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
       return (upperSiteName + '#' + obj.name + '@' + obj.birthYear);  

    }
    else{
       return 'invalid';
    }
}


//5.
function monthlySavings( arr, livingCost ){
    if(Array.isArray(arr)  &&  typeof(livingCost) === 'number'){
        let totalIncome = 0;
        for(const a of arr){
            if(a >= 3000 ){
                let tax= a * (20/100);
                let afterTax = a - tax;
                totalIncome= totalIncome + afterTax;
            } 
            else{
                totalIncome =totalIncome + a ;
            }   
        }
        const savings = totalIncome - livingCost;
         if(savings>=0){
            return savings; 
         }
         else{
            return 'earn more';
        }    
    }
    else{

        return 'invalid input';
    }        
}




