/*
Code This #7
Compute First Factorial

Description
A factorial, denoted by n!, is the product of all positive integers less than
or equal to n.

In this challenge, we are given an integer and must return the factorial.


Example:
n = 4;
factorial = 4 * 3 * 2 * 1 = 24;

---------

Solution:
*/


function firstFactorial(n) {
    let factorial = 1;
    while (n > 0) {
        factorial = factorial * n;
        n--;
    }
    return factorial;
}
