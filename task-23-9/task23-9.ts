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