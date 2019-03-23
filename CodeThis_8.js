/*
Code This! #8
Compass Directions

Description
You begin by facing 1 out of 4 possible compass directions (N S E W).

Given a sequence of left (L) and right (R) turns as an array of single-character
strings, determine which direction you are facing at the end.

Note: right turns are clockwise and left turns are counter-clockwise on a compass.

Example:
start = 'N';
turns = ['L', 'L', 'L', 'R'];

Output: 'S';


---------

Solution:
*/


function finalDirection(start, turns) {
    let compass = ['N', 'E', 'S', 'W'];

    // determine start position on compass
    let pos = null;
    compass.forEach((item, index) => {
        if (start == item) {
            pos = index;
        }
    });

    // set position based on turns
    turns.forEach(turn => {
        if (turn == 'L') {
            pos = pos == 0 ? 3 : pos--;
        } else {
            pos = pos == 3 ? 0 : pos++;
        }
    });

    return compass[pos];
}
