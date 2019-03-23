/*
Code This! #2
Counting Valleys

Scenario: Juan is an avid hiker. He tracks his hikes meticulously, paying close
attention to small details like topography. During his last hike he took exactly
steps. For every step he took, he noted if it was an uphill, or a downhill, step.
Juan's hikes start and end at sea level and each step up or down represents a
unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a
step up from sea level and ending with a step down to sea level.

A valley is a sequence of consecutive steps below sea level, starting with a step
down from sea level and ending with a step up to sea level.

Given Juan's sequence of up and down steps during his last hike, find and print
the number of valleys he walked through.

Function Description: Return an integer that denotes the number of valleys Juan traversed.

parameters:
n: the number of steps Juan takes
s: a string describing his path

Example Input:
8
'UDDDUDUU'

Output: 1
_/\      _
   \    /
    \/\/

Return a single integer that denotes the number of valleys Juan walked through during his hike.


---------

Solution: Count the number of times that the pos returns to 0 from -1.

*/

function countingValleys(input) {
    let valleys = 0;
    let pos = 0;
    let array = s.split('');

    array.forEach(item => {
        let posIn = pos;
        pos = item == 'U' ? pos + 1 : pos - 1;

        if (pos == 0 && posIn == -1) {
            valleys++;
        }
    });

    return valleys;
}
