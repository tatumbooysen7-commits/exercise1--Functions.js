function multiply(numb1, numb2, numb3){
       if(numb1===numb2, numb2===numb3){
            return "numbers must not be the same";}
            return numb1*numb2*numb3;
    }

console.log(multiply(3,5,6))



const convertToSeconds = function(minutes){
   // 1 minute = 60 seconds;
    const convertToSeconds = Function(minutes)
    {return minutes * 60;}
}
console.log(convertToSeconds(2));

function fahrenheitToCelcius(fahrenheit){
    //celcius = (fahrenheit - 32) * 5/9
    return (fahrenheit - 32) * 5/9;
}
console.log(fahrenheitToCelcius(32));


function reverseString(text){
    return text.split("").reverse().join("");
}
console.log(reverseString("Sam"));

function countVowels(sentence) {
    sentence = sentence.toLowerCase();
    let count = 0;

    for (let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
    if (letter === "a"||
    letter === "e"||
    letter === "i"||
    letter === "o"||
    letter === "u")
    {count++;}
}
    return  count++;
}
console.log(countVowels("sentence"));


function isPrime(number){
    if (number < 2){
        return false;
    }

    for (let i  = 2; i < number; i++) {
        if(number % i === 0){
            return false;
        }
    }

    return true;
}
console.log(isPrime(10));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(15));