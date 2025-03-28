let Max_limit;

// Input validation loop
do { // this loop will make sure that the user will only put a positive integer to acjieve the wanted outcome 
    Max_limit = parseInt(prompt("Enter the Limit of the Double Loop:")); // this line of code will show a dialog box that will ask the user to enter the limit of the double loop
    if (isNaN(Max_limit) || Max_limit <= 0) {
        console.log("Invalid input. Please enter a positive integer.");
    }
} while (isNaN(Max_limit) || Max_limit <= 0);

console.log("Result:");
// the loop below will iterate ll the combinations of the loop counters
for (let i = 0; i < Max_limit; i++) {
    for (let h = 0; h < Max_limit; h++) {
        let addedValue = i + h;
        console.log(`[${i}][${h}] Added value is ${addedValue}`); // this will display the Result
    }
}
