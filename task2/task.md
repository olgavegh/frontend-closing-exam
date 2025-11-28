# Algorithms 🧮

## Tasks

1. Implement a function according to the specification in the `./task.js`.
2. You can try out your implementation using the `./playground.js`.
3. You can run the tests for this task by issuing the `npm test` command from this directory.

## Specification

Find the unique letters in a sentence. Create a function that
receives a sentence. Caluclate how many different letters in the
given sentence. 

Only calculate the letters of the English Alphabet (a-z) 
and handle them case insensitive, so "A" is same kind as "a".

Whitespaces and punctuation and numbers does not count. The
function should skip them.

### Function arguments and return value

```js
function countDifferentLetters(sentence) {}
```

Parameters:
- `sentence`: It is a string represents the sentence to analyse.

Returns:
- Only a single number is the return value. It shows how many different
letters can be found in the sentence (case insensitive, only letters a-z).


### Examples:

```js
countDifferentLetters('aaabc') 
// returns 3, duplications do not count

countDifferentLetters('aaAAA') 
// returns 2, "a" is the same kind as "A"

countDifferentLetters('aabbcc123,?  ') 
// returns 3 only "a", "b" and "c" counts, comma, questionmark and spaces does not 
``` 

## Hints

- Here you can find an ASCII code table: [https://www.ascii-code.com/](https://www.ascii-code.com/).
