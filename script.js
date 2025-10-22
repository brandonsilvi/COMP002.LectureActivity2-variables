let myGreeting = "Good Evening Professor!";
console.log(myGreeting);


const pi = 3.14;
console.log("The value of pi is: ", pi);

//the line below is commented out so the rest of the code can run without error
// pi = 3.5; // The console states "Uncaught TypeError: Assignment to constant variable." This happens because pi is declared as a constant and cannot be reassigned.

let myNumber = 7;
console.log("My number is:", myNumber);

let smallestValue = Math.min(myNumber, pi);
console.log("The minimum value between myNumber and pi is:", smallestValue);