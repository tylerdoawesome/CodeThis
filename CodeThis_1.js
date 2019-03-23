/*
Code This! #1
Find Pairs in an Array

Scenario: Randall works at a clothing store. He has a large pile of socks that he
must pair by color for sale. Given an array of integers representing the color of
each sock, determine how many pairs of socks with matching colors there are.

Description: Function must return an integer representing the number of matching
pairs of socks that are available.

Task: Given an array (n), return the total number of matching pairs.

Example
Input: [10, 20, 10, 10, 20, 10, 20, 30, 50];
Output: 3

---------

Solution:
*/

function sockMerchant(ar) {
    let array = ar.sort(function (a, b) { return a - b });

    let pairs = 0;
    while (array.length > 1) {
        if (array[0] == array[1]) {
            pairs++;
            array.splice(0, 2);
        } else {
            array.splice(0, 1);
        }
    }
    return pairs;
}
