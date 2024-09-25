
// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to increase the price of each product by 10% if the quantity is greater than 5.

// Task 4 : Validate Optional Function in Interface with Default Behavior
// You have an interface Device with an optional method start(). If the device has a start method, it should be called, otherwise, log "Device starting with default settings."


// Task 1:

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "John Doe",
    age: 25,
};

if (person.age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}

// Task 2:

interface Teacher {
    name: string;
    subjects: string[];
}

const teacher: Teacher = {
    name: "Mohammad",
    subjects: ["Math", "Science", "English"],
};

for (let subject of teacher.subjects) {
    console.log(subject);
}

// Task 3:

interface Product {
    name: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    { name: "Product A", price: 10, quantity: 10 },
    { name: "Product B", price: 20, quantity: 5 },
    { name: "Product C", price: 30, quantity: 15 },]
    
for (let product of products) {
    if (product.quantity > 5) {
        product.price += (product.price * 0.1);
    }
}

// Task 4:

interface Device {
    start?(): void;
}

function initializeDevice(device: Device): void {
    if (device.start) {
      device.start(); // Call start if it exists
    } else {
    console.log("Device starting with default settings.");
    }
}

const deviceWithStart: Device = {
    start() {
    console.log("Device started using custom start method.");
}
};


const deviceWithoutStart: Device = {};

// Test both cases
initializeDevice(deviceWithStart);    
initializeDevice(deviceWithoutStart); 