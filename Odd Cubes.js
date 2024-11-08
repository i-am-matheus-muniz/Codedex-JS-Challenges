/*
Odd Cubes

--Challenge Description--
When you multiply any number three times, you're cubing it (e.g., 3³ = 3 x 3 x 3 = 27).

Define a limit variable with a number value like 5. Then, define a total with an initial value of 0.

Use a for loop to iterate from 1 to the limit and do the following each time:

Only calculate the cubed value for odd numbers.
Update the total variable each time.
Note: Make sure to include the limit in case it is also an odd number.

Finally, log the total to the console.

For example, if limit is 5, the total should be 153:

1³ + 3³ + 5³ = 1 + 27 + 125 = 153

Difficult: Medium
*/

let limit = 5;
let total = 0;

for (let i = 1; i <= limit; i++) {
    if (i % 2 !== 0) {
        total += i ** 3;
    }
} 

console.log(total);