/*
Code This! #4
2D Array of Hourglass Sums

You are given a 6x6 2D array:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass to be structured like this.
a b c
  d
e f g

Your job is to sweep the 2d array to find the hourglass with the greatest sum.
Individually, that would look like this:
1 1 1   1 1 0   1 0 0
  1       0       0
1 1 1   1 1 0   1 0 0  ...

0 1 0
  1
0 0 0
...

Function Description: Return the highest sum of an hourglass in any given 6x6 2d array.


Example
Input:
[
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

Output: 19


---------

Solution:


*/

function hourglassSum(arr) {
    let max = -100000;
    arr.forEach((array, index) => {
        if (index + 2 <= 5) {
            for (let i = 0; i < array.length - 2; i++) {
                let a = array[i] + array[i + 1] + array[i + 2];
                let b = arr[index + 1][i + 1];
                let c = arr[index + 2][i] + arr[index + 2][i + 1] + arr[index + 2][i + 2];
                let abc = a + b + c;
                if (abc > max) {
                    max = abc;
                }
            }
        }
    });
    return max;
}
