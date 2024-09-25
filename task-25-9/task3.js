// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
var person = {
    name: "John Doe",
    age: 25,
};
if (person.age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
var teacher = {
    name: "Mohammad",
    subjects: ["Math", "Science", "English"],
};
for (var _i = 0, _a = teacher.subjects; _i < _a.length; _i++) {
    var subject = _a[_i];
    console.log(subject);
}
var products = [
    { name: "Product A", price: 10, quantity: 10 },
    { name: "Product B", price: 20, quantity: 5 },
    { name: "Product C", price: 30, quantity: 15 },
];
for (var _b = 0, products_1 = products; _b < products_1.length; _b++) {
    var product = products_1[_b];
    if (product.quantity > 5) {
        product.price += (product.price * 0.1);
    }
}
function initializeDevice(device) {
    if (device.start) {
        device.start(); // Call start if it exists
    }
    else {
        console.log("Device starting with default settings.");
    }
}
var deviceWithStart = {
    start: function () {
        console.log("Device started using custom start method.");
    }
};
var deviceWithoutStart = {};
// Test both cases
initializeDevice(deviceWithStart);
initializeDevice(deviceWithoutStart);
