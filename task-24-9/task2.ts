////1
let arr: number[] = [1, 2, 3, 4, 5];
let sum:number = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log("Sum of array elements: ", sum);

///////2
let arr2: number[] =[1, 2, 3, 4, 5];
let states: string = "";
for (let i = 0; i < arr2.length; i++){
    if(arr2[i] < 0){
        states = "Not All Positive";
        break;
    }else{
        states = "All Positive";
        break;
    }
}
console.log("States: ", states);

///////3
const namesArray = ["yousef", "Sarah", "ali", "omar"];

let longestName = namesArray[0];

for (let i = 1; i < namesArray.length; i++) {
    if (namesArray[i].length > longestName.length) {
        longestName = namesArray[i];
    }
}

console.log("Longest name:", longestName);

///////4
const myString = "hello world";
const character = "o";
let count = 0;

for (let i = 0; i < myString.length; i++) {
    if (myString[i] === character) {
        count++;
    }
}

console.log(`Occurrences of '${character}':`, count);

///////5

const numbersArray = [3, 5, 7, 8, 9, 10, 13, 17];
const primes: number[] = [];  // Correctly initialize primes as a number array

for (let i = 0; i < numbersArray.length; i++) {
    let isPrime = true;

    if (numbersArray[i] <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j * j <= numbersArray[i]; j++) {  // avoiding Math.sqrt()
            if (numbersArray[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primes[primes.length] = numbersArray[i];  // Correctly add prime number
    }
}

let primesStr = '';
for (let i = 0; i < primes.length; i++) {
    primesStr += primes[i] + " ";
}

console.log("Prime numbers:", primesStr);