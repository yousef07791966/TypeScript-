//////// 1 
let num: number = 5;
if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
}
else {
    console.log(`${num} is an odd number.`);
}


//////// 2


let prices: number[] = [50, 200, 30, 150, 400, 100];
let threshold: number = 100;

for (let price of prices) {
    if (price > threshold) {
        console.log(price);
    }
}

//////// 3 


type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

let users: User[] = [
    { name: "Ali", age: 35, isAdmin: true },
    { name: "Mohammad", age: 40, isAdmin: false },
    { name: "Fatima", age: 45, isAdmin: true }
];

let oldestAdmin: User | null = null;

for (let i = 0; i < users.length; i++) {
if (users[i].isAdmin) {
    if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
    oldestAdmin = users[i];
    }
}
}

if (oldestAdmin) {
console.log(`Oldest Admin: ${oldestAdmin.name}`);
} else {
console.log("No admin found");
}

//////// 1

let multiTypeArray: (number | string)[] = [1, "hello", 2, "world"];


////////// 2
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50

////////// 3

let myFunction: (x: number, y: number) => number;

myFunction = function (a: number, b: number): number {
    return a + b;
}

console.log(myFunction(5, 10)); // Output: 15

////////// 4