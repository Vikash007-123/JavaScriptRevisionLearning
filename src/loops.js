/*
Assignment 1: The "Number Cruncher" (for loop)
Goal: Practice using a for loop when the number of iterations is fixed.

Task: Write a script that prints all even numbers from 1 to 20.

Bonus: Instead of just printing the numbers, calculate the sum of these even numbers and print the final total at the end.

Why use for? You know exactly where the loop starts (1) and where it ends (20).
*/

//Answer

// Add parameters 'start' and 'end'

function addsum() {
    let sum = 0;
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            sum = sum + i;

        }

    }
    console.log(sum);
}
addsum();

function addSumOfEvenNumber(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

const result = addSumOfEvenNumber(1, 20); // Now these numbers actually matter!
console.log("The total sum is:", result); // Output: 110



/*
Assignment 2: The "Safety Wait" (while loop)
Goal: Practice using a while loop for scenarios where the number of iterations is not fixed (mimicking a Selenium automation "wait" scenario).

Task: Create a variable called isElementVisible and set it to false. Use a while loop to simulate "waiting" for the element.

Inside the loop, print "Waiting for element to appear...".

Use a counter to stop the loop after 5 "tries" to avoid an infinite loop (this simulates a timeout).

Why use while? In real-world automation, you don't know if an element will appear in 1 second or 5 seconds; you keep checking until the condition changes.
*/

let isElementVisible = false;

let attempts = 1;

while (!isElementVisible && attempts <= 5) {
    console.log("Attempt " + attempts + ": Waiting for element to appear...");
    if (attempts === 3) {
        isElementVisible = true;
        console.log("Element found!");
    }
    attempts++; // Increment the counter to eventually break the loop
}

if (!isElementVisible) {
    console.log("Timeout: Element did not appear after 5 tries.");
}


/*
Assignment 3: The "Menu Selector" (do-while loop)
Goal: Practice using do-while to ensure the code block runs at least once.

Task: Create a simple "Guest Check-in" simulation.

Initialize a variable guestCount = 1.

Use a do-while loop to print "Guest number [count] has been checked in."

Increment the count.

The loop should continue as long as guestCount is less than or equal to 0 (This is a trick! Since it's a do-while, it should still run once).

Why use do-while? You want to ensure at least one guest is processed before the condition is even checked.
*/

let guestCount = 2;

do {
    console.log("Guest number " + guestCount + " has been checked in.");
    guestCount++;
} while (guestCount <= 0) {
    console.log("Check-in process completed.");
}


//Truthy and Falsy values

while (true) {
    console.log("Always Execution")
}

let activeUsers = 0; // 0 is Falsy

while (activeUsers) {
    console.log("This will NEVER print.");
    activeUsers--;
}

let batteryLevel = 0; // 0 is Falsy

do {
    console.log("Attempting to boot device...");
} while (batteryLevel);

// Result: Prints "Attempting to boot device..." once, then stops.