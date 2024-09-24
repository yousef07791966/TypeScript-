//////// 1 
var num = 5;
if (num % 2 === 0) {
    console.log("".concat(num, " is an even number."));
}
else {
    console.log("".concat(num, " is an odd number."));
}
//////// 2
var prices = [50, 200, 30, 150, 400, 100];
var threshold = 100;
for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
    var price = prices_1[_i];
    if (price > threshold) {
        console.log(price);
    }
}
var users = [
    { name: "Ali", age: 35, isAdmin: true },
    { name: "Mohammad", age: 40, isAdmin: false },
    { name: "Fatima", age: 45, isAdmin: true }
];
var oldestAdmin = null;
for (var i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
            oldestAdmin = users[i];
        }
    }
}
if (oldestAdmin) {
    console.log("Oldest Admin: ".concat(oldestAdmin.name));
}
else {
    console.log("No admin found");
}
//////// 1
var multiTypeArray = [1, "hello", 2, "world"];
////////// 2
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
////////// 3
var myFunction;
myFunction = function (a, b) {
    return a + b;
};
console.log(myFunction(5, 10)); // Output: 15
////////// 4
