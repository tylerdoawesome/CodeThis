/*
Code This! #3
Jumping On Clouds

Maggie is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus.
She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads.
Determine the minimum number of jumps it will take Maggie to jump from her starting position to the last cloud. It is always possible to win the game.

For each game, Maggie will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example, c=[0,1,0,0,0,1,0] indexed from 0 ... 6.
The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. She could follow the following two paths: 0->2->4->6 or 0->2->3->4->6.
The first path takes 3jumps while the second takes 4.

Function Description: Return the minimum number of jumps required, as an integer.

Example
Input: [0, 0, 1, 0, 0, 0, 1, 0]
Output: 4

---------

Solution: Look 2 ahead first, if not possible then jump 1 ahead.

*/

function jumpingOnClouds(input) {
    let jumps = 0;
    let pos = 0;
    while (pos < input.length - 1) {
        if (input[pos] == input[pos + 2]) {
            jumps++;
            pos = pos + 2;
        } else {
            jumps++;
            pos++;
        }
    }
    return jumps;
}