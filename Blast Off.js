/*
Blast Off

--Challenge Description--
Since Apollo 11, rocket launches are moments of great excitement, especially the countdown.

Write a small program that uses a for loop to simulate a countdown from 10 to 0, logging each number to the console. Then, log "To infinity and beyond! 🚀" at the very end.

The output should look like this:

10
9
8
7
6
5
4
3
2
1
To infinity and beyond! 🚀

Difficult: Easy
*/

for (let countdown = 10; countdown > 0; countdown--) {
    console.log(countdown);
}
console.log("To infinity and beyond! 🚀");