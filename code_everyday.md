# Do At Least Two Everyday:
* Apply to one [job](https://www.indeed.com/jobs?q=full+stack+developer&l=San+Francisco%2C+CA)
* [Leetcode](https://leetcode.com/problemset/all/) problem
* Read 5 pages from a coding [Book](http://ce.sharif.edu/courses/96-97/2/ce153-4/resources/root/Text%20Books/An%20Introduction%20to%20Computer%20Science.pdf)
* Watch a conference [talk](https://www.dotconferences.com/conference/dotjs)
* Practice [pitch](https://docs.google.com/document/d/1b2WZysfhfLellMUBM3-a_c7rZNcJX-XrTo_jpJklLyw/edit)
* Go to [Noisebridge](https://www.meetup.com/noisebridge/events/) or [Sudoroom](https://sudoroom.org/calendar/) Event
* Get AWS [certified](https://acloud.guru/learn/aws-certified-solutions-architect-associate)

### Markdown Cheat [Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# May
### [X] 6/2/19 

#### Leetcode (1)
* isSelfDivisible #728 : **Completed**
   * Useful code block - Each digit of a number
   ```javascript
   const digitOfInt = (num) => {
    if (num === 0) return false;
    let curr = num;
    while (curr > 1) {
        let digit = Math.floor(curr % 10); 
        console.log(digit);
        curr /= 10;
        }
    }
    ```
* wordSubsets #916 : **Attempting**
    * Intializing a new variable with the values of an object will create a _reference_ to that object instead of a _copy_.
    ```javascript
    let x = {
        'a': 1;
        'b': 2;
    };

    let y = x;
    y['a']--; //this will actually change the values of variable x. 
              //y is currently referencing x, not a copy of it.
    ```
    * In ECMAScript 6, there is a `Object.assign` method that will create a _copy_ of an obj. Here's more [info.](https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object)
    ```javascript
    let y = Object.assign({},x);
    //Any changes to y will not affect the properties of x
    ```

    * **Summary:** The initial solution iterated through every value of B and checking for its occurence in the words of A.  This is _intractable_ because if letters are repeated in array B, then duplicate operations are made.

    ```javascript
    A = ["amazon","apple","facebook","google","leetcode"],
    B = ["ec","oc","ceo"]

    //Output:
    ["facebook","leetcode"]
    ```

        A better solution would be to create a condensed array of length 26 (with each index representing a letter) and counting only the maximum orrurence of each individual sub set in B.  The reason we do this is because the largest subset check will control.

    ```javascript
    B = [0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
    //       c   e                   o

    //if B = ['ooooo','e',arr]
    B = [1,0,0,0,1,0,0,0,0,0,0,0,0,0,5,0,0,2,0,0,0,0,0,0,0,0,0]
    //       c   e                   o     r
    ```

#### Intro to Computer Science (1-5)

* 1.1 The Universal Machine
  * **Computer:**  a machine that stores and manipulate information under the control of a changeable program.
  * **Computer Program:** a detailed, step-by-step set of instructions telling a computer exactly what to do

* 1.2 Program Power
  * Programming develops the skill to analyze complex systems by reducing them into interactions of understandable subsystems

* 1.3 What is Computer Science?
  * The fundamental question of computer science is: _What can be computed?_
  * The three main techniques investigating this questions are: _design, analysis,_ and _experimentation_
  * **Algorithm:** a step-by-step process for achieving a desired result.
    * Some problems are not solvable by _any_ algorithm.  This is why mathematical _analysis_ of a problem is also use.
    * **Intractable Algorithms:** an algorithm that takes too long or requires too much memory to be of practical value.

* 1.4 Hardware Basics
  * **CPU:** central processing unit, the "brain" of the computer.  This is where all the basic operations of the computer is carried out.
  * **Main Memory (RAM or _Random Access Memory_):** The memory stores programs and data.  The CPU can only directly access information that is store in main memory.  Fast, but is volatile: _When the computer turns off, the memory is lost._  There must be a secondary memory that provides permanent storage.
  * **Hard Drive:** Is the secondary memory.


---
### [ ] 6/3/19

LeetCode
---
### [ ] 6/4/19
---
### [ ] 6/5/19
---
### [ ] 6/6/19
---
### [ ] 6/7/19
---
### [ ] 6/8/19
---
### [ ] 6/9/19
---
### [ ] 6/10/19
---
### [ ] 6/11/19
---
### [ ] 6/12/19
---
### [ ] 6/13/19
---
### [ ] 6/14/19
---
### [ ] 6/15/19
---
### [ ] 6/16/19
---
### [ ] 6/17/19
---
### [ ] 6/18/19
---
### [ ] 6/19/19
---
### [ ] 6/20/19
---
### [ ] 6/21/19
---
### [ ] 6/22/19
---
### [ ] 6/23/19
---
### [ ] 6/24/19
---
### [ ] 6/25/19
---
### [ ] 6/26/19
---
### [ ] 6/27/19
---
### [ ] 6/28/19
---
### [ ] 6/29/19
---
### [ ] 6/30/19
---




