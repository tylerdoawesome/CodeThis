/*
Code This! #6
Ransom Note

Scenario
Michelle is a kidnapper who wrote a ransom note, but now she is worried it will be
traced back to her through her handwriting. She found a magazine and wants to
know if she can cut out whole words from it and use them to create an untraceable
replica of her ransom note. The words in her note are not case-sensitive and she must
use only whole words available in the magazine. She cannot use substrings or
concatenation to create the words she needs, nor can she use the same word twice.

In this challenge, we must compare 2 arrays to see if one array is a subset of another.

Example 1:
Magazine -  I want to live in a world where dogs eat hot tuna sandwiches
Note -      I want to eat hot dogs

return true;


Example 2:
Magazine - two times three is not four
Note -     two times two is four

return false;
(the word 'two' needs to be present twice in the magazine array)


---------

Solution: Use the array.prototype.includes() function.
*/


function checkMagazine(magazine, note) {

    let m = magazine.split(' ');
    let n = note.split(' ');

    let match_count = 0;

    n.forEach(note_item => {
        m.forEach((mag_item, index) => {
            if (note_item == mag_item) {
                match_count++;
                m.splice(index, 1);
            }
        });
    });

    if (match_count == n.length) {
        return 'true';
    } else {
        return 'false';
    }
}
