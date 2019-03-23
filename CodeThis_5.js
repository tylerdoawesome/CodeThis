/*
Code This! #5
2D Hourglass Sums

Description
A left rotation of an array removes the first element of the array and appends
it to the end of the array.

For this challenge, we are given an array (a) and a number (n).
Our task is to left-rotate the given array n amount of times.

Example:
a = [1, 2, 3, 4, 5];
n = 4;

[1, 2, 3, 4, 5] --> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]

---------

Solution:
*/


function rotateLeft(a, n) {
    while (n > 0) {
        a.push(a.shift());
        n--;
    }
    return a;
}
