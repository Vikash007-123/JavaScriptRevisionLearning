// Part 2: The "Decision Tree" (if-else if-else)
// Task: Create a "Traffic Light System."

// Create a variable lightColor.

// If the color is "red", log "Stop".

// If the color is "yellow", log "Slow down".

// If the color is "green", log "Go".

// For any other input, log "Invalid signal".

// Bonus: Ensure your code handles case sensitivity (e.g., "RED" should still trigger "Stop").





let color = "RED"; // Test with different cases
let lightColor = color.toLowerCase(); // Standardize the input first

if (lightColor === "red") {
    console.log("Stop");
}
else if (lightColor === "yellow") {
    console.log("Slow down");
}
else if (lightColor === "green") {
    console.log("Go");
}
else {
    console.log("Invalid signal");
}


/*
Part 3: Switch Case for Multiple Matches
Task: Create a "Day of the Week" tracker.

Use a switch statement that takes a number (1-7).

Print the corresponding day (1 = Monday, 7 = Sunday).

Include a default case for numbers outside that range.

Question: Why might a switch be cleaner than an if-else chain for this specific task?


*/

let number = 8;

switch (number) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day please pass between 1-7 days");
        break;


}



/*
Part 4: Identifying Pitfalls
Review the following code snippets and identify the error based on the "Common Pitfalls" mentioned in your notes:

Snippet A:

JavaScript
let temp = 35;
if (temp > 20) {
    console.log("It is warm.");
} 
if (temp > 30) {
    console.log("It is hot!");
}
Identify the issue: (Hint: Look at the "Multiple ifs" vs "if-else if" memory tip).

*/


// let temp = 35;
// if (temp > 20) {
//     console.log("It is warm.");
// }
// if (temp > 30) {
//     console.log("It is hot!");
// }

//correct one

let temp1 = 35;

if (temp1 >= 35) {
    console.log("It is hot!"); // Path 1
}
else if (temp1 > 20) {
    console.log("It is warm."); // Path 2
}
else {
    console.log("It is cold."); // Path 3
}
