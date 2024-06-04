//Given an integer x, return true if x is a  palindrome, and false otherwise.
//Se tentarmos fazer algo como num[0] em um número num, isso não funcionará porque os números não têm índices como as strings ou arrays.

let compareNumber = [];

function findPolindrome(num){
    const numberToString = num.toString();

    for(let i = numberToString.length - 1; i >=0; i--){
        compareNumber.push(numberToString[i]);
    }

    let convertToString = compareNumber.join('');

    return convertToString === numberToString 

} 

console.log(findPolindrome(121)); 
console.log(findPolindrome(123)); 
console.log(findPolindrome(-121));
console.log(findPolindrome(10));