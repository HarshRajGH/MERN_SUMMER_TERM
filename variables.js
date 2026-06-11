// var a= 10;
// var b= 20;
// var c= a+b;
// console.log("The sum of " + a + " and " + b + " is: " + c);
// console.log(`The sum of ${a} and ${b} is: ${c}`); //Template literals

// const r = require('readline');
// const rl = r.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the first number: ", (a) => {
//     rl.question("Enter the second number: ", (b) => {
//         const sum = Number(a) + Number(b);
//         console.log(`The sum of ${a} and ${b} is: ${sum}`);
//         rl.close();
//     });
// });

const r = require('readline');
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a integer: ", (integer) => {
    const result = integer % 2 === 0 ? "Even" : "Odd";
    console.log(`The number ${integer} is: ${result}`);
    rl.close();
}); 