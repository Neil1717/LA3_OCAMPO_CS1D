let score = parseInt(prompt("Enter your score:")); // this line of code will display a dialog box that will ask the user to enter their score.
// i'll utilize Conditional ternary operators to achieve the firts output
let grade = score >= 97 ? "1.00 Excellent" : // i'll store the scores in variable "grade", and in this line of code if the grade is graetr than 97 it is gonna display 1.00 Excellent
// and that will be the same with the rest of the code below
            score >= 94 ? "1.25 Excellent" :
            score >= 91 ? "1.50 Above Average" :
            score >= 88 ? "1.75 Above Average" :
            score >= 85 ? "2.00 Average" :
            score >= 82 ? "2.25 Average" :
            score >= 79 ? "2.50 Below Average" :
            score >= 76 ? "2.75 Below Average" :
            score >= 75 ? "3.00 Below Average" :
            score >= 72 ? "4.00 Poor" : "5.00 Poor"; // in this line of code if the users input is lower than 71 it is the display 5.00 poor

// this variable will store the answers for the second output
let remarks = score >= 90 ? "HIGH PASS, Candidate for Cum Laude" : // this will be displayed when the users input is greater than 90
              score >= 80 ? "AVERAGE PASS" : // this will be displayed when the user input is between 80 - 89
              score >= 75 ? "LOW PASS" : "FAILED, Needs Improvement"; // this will be displayed if the users puts a score between 75 -79, else it is gonna display you need improvement
// the line of codes below will display the output
console.log("Result:");
console.log(`Your equivalent Grade is "${grade}"`);
console.log(`Final Remarks: ${remarks}`);