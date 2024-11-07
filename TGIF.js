/*
TGIF

--Challenge Description--
In many parts of the world, we look forward to Friday to kick off a weekend of leisure. Some express this with "TGIF" (short for "Thank God It's Friday").

Let's use conditionals to tell if the weekend is upon us!

First, define a day variable with a number between 1 and 7. So 1 represents Monday, 2 represents Tuesday, and so on.

Based on the value of a day variable, use conditionals to log one of the following:

If it's a weekday, log "Not Friday, yet!"
If it's Friday, log "TGIF 🕺".
If it's a weekend, log "Yay, weekends! 🙌".
Otherwise, log "Wait, what day is it?"

Difficult: Medium
*/

let day = 5;

if (day >= 1 && day < 5) {
    console.log("Not Friday, yet!");
} else if (day === 5) {
    console.log("TGIF 🕺");
} else if (day > 5 && day <= 7) {
    console.log("Yay, weekends! 🙌");
} else {
    console.log("Wait, what day is it?");
}