////1
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum of array elements: ", sum);
///////2
var arr2 = [1, 2, 3, 4, 5];
var states = "";
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0) {
        states = "Not All Positive";
        break;
    }
    else {
        states = "All Positive";
        break;
    }
}
console.log("States: ", states);
///////3
var namesArray = ["Mohammad", "Sarah", "Alexander", "Amira"];
var longestName = namesArray[0];
for (var i = 1; i < namesArray.length; i++) {
    if (namesArray[i].length > longestName.length) {
        longestName = namesArray[i];
    }
}
console.log("Longest name:", longestName);
///////4
var myString = "hello world";
var character = "o";
var count = 0;
for (var i = 0; i < myString.length; i++) {
    if (myString[i] === character) {
        count++;
    }
}
console.log("Occurrences of '".concat(character, "':"), count);
///////5
var numbersArray = [3, 5, 7, 8, 9, 10, 13, 17];
var primes = []; // Correctly initialize primes as a number array
for (var i = 0; i < numbersArray.length; i++) {
    var isPrime = true;
    if (numbersArray[i] <= 1) {
        isPrime = false;
    }
    else {
        for (var j = 2; j * j <= numbersArray[i]; j++) { // avoiding Math.sqrt()
            if (numbersArray[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        primes[primes.length] = numbersArray[i]; // Correctly add prime number
    }
}
var primesStr = '';
for (var i = 0; i < primes.length; i++) {
    primesStr += primes[i] + " ";
}
console.log("Prime numbers:", primesStr);
