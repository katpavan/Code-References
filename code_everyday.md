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
[x] [6/2/19](./code_everyday_files/2019/June/6-2-19.md)

[x] [6/3/19](./code_everyday_files/2019/June/6-3-19.md)

[x] [6/4/19](./code_everyday_files/2019/June/6-4-19.md)

[x] [6/5/19](./code_everyday_files/2019/June/6-5-19.md)



---
## [X] 6/6/19

### Fizz Buzkill - [Answering Tricky JS Interview Questions](https://www.youtube.com/watch?v=cMxI8n393ZM) (Russel Anderson)

#### Summary
* Lot of times interviewers ask questions that are very tricky and kind of pointless.  But it's still important to be able to answer these question easily.

**Explain Event Delegation**
  * If you attach an event listener to the DOM element, that listener is not only firing on that DOM element, but also on _every_ child of that DOM element.
  * You are bascially adding event listeners to all the children of that element.
  * Example : If you have an `<ul><li><a>`, if you add an event listener to the `<ul>`, you are also adding the event listener to the `<li>` and `<a>`.  Clicking on the children will also trigger the event.

**Describe Event Bubbling**
  * Inverse of event delegation.  Also known as **propogation**, events on an element will _bunnble up_ and also fire on all parents.
  * Events on an element will bubble up on the parents.
 
**Difference Between "Target" and "CurrentTarget"**
  * Target is the element that you clicked on and currentTarget is the element that the event listener was actually attached to.
 
**Explain the difference between the usage of**

```javascript
function foo(){
// i am known as a definition of a statement
}

var foo = function(){
// i am known as an expression
// i resolve to a value, even it just 'undefined'
}
```
    
  * Functions as expressions vs. definitions
  * MDN - An expression is any valid unit of code that resolves to a value.
  * Definitions cannot be used as an IIFE. Unles....(see 5)
  
 **Explain why the following doesn't work as an IIFE"**
 
```javascript
function foo(){
    // i puty this code
}();
   // SyntaxError: expected expression, got')'
```
    
**IIFE:** Immediately invoked function expression
      *Wrapping a function **definition** in `()` will convert it into an **expression**.  It can then be used as an IIFE
      
```javascript
(function foo(){  }());
```

**Why use IIFE ever?"**
  * To control variable scope
  
**Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?**
  * You can'y predict the future.
  * Reduce collision
  * maintain independence

**Explain hoisting**
  * all variables (var) are declared at the top of a given function scope whether you like it or not (includes function declarations)

    ```javascript
    function hoist(track){
      if(track === 'Stir Fry'){
        var action = 'dance';
      }
      
      else {
        var action = 'skip';
      }
      
      return action;
    }
    //error: 'action' is already defined.
    ```
  * This is what javascript actually does with the `action` declaration.
  
    ```javascript
    function hoist(track){
        var action
      if(track === 'Stir Fry'){
        action = 'dance';
      }
      
      else {
        var action = 'skip';
      }
      
      return action;
    }
    ```
  * Javascript _hoists_ the variable declaration to the top of the file.
  * `var` variables and functions are both hoisted.  
  * ES6's `const` and `let` solve this problem since they are function and block scoped.

### Codesignal(1)

* rotateImage [link](https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB) : **Attempted**
    * I had able to figure out the order of which matrix gets moved where but it still doesn't seem to work.  I've passed the first two cases but stuck on the 5x5 and beyond
        ```javascript
        function rotateImage(a) {
            const L = a.length;
            const l = L-1;
            for(let i = 0; i < Math.floor(L/2); i++){
                for(let j = i; j < l-i; j++){
                    let temp = a[j][l]
                    a[j][l] = a[i][j];
                    a[i][j] = a[l-j][i]
                    a[l-j][i] = a[l][l-j];
                    a[l][l-j] = temp;
                    console.log(i,j,l)
                }
            }
            return a
        }
        ```
    * So the formula breaks down when you get into the subsequent layers.  I had to resort to the book for the answer so this one is kind of a failure.  Definitely need to go back and understand the solution.  Here it is though:

        ```javascript
        function rotateImage(a) {
            const n = a.length;
            for(let layer = 0; layer < n/2; layer++){
                let first = layer;
                let last = n - 1 - layer;
                for(let i = first; i < last; i++){
                    let offset = i - first;
                    let top = a[first][i];
                    
                    a[first][i] = a[last-offset][first];
                    a[last-offset][first] = a[last][last-offset];
                    a[last][last-offset] = a[i][last];
                    a[i][last] = top;
                }
            }
            return a
        }
        ```

---
## [ ] 6/7/19

### Codesignal(1)

* rotateImage [link](https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB) : **Completed**
    * Going back through the solution slowly, everything makes sense now.  There are a couple of key points that I missed with my first draft.

        ```javascript
        function rotateImage(a) {
            const n = a.length;
            for(let layer = 0; layer < n/2; layer++){
                let first = layer;
                let last = n - 1 - layer; //this line was pretty much what I wrote the first time.  Instead of using a second variable called 'l = L-1', the solution just grouped it into the last variable.
                
                //the last variable also better explains where the loop should end on each layer.  naming the for loops with 'i' and 'j' is not very clear.
                
                for(let i = first; i < last; i++){
                    let offset = i - first; 
                    //this offset is probably the most important part of the formula.  Before, I used last-i.  This made sense at first but 'i' is constantly getting larger with each subsequent 'layer' iteration.  This means that I would be skipping values with 'last-i'.  
                    //With an 'offset', the values always starts at 0 because 'i' and 'first' starts out the same on every iteration of the second loop.  This means that we are always counting back correctly from 'last'
                   
                    let temp = a[first][i];
                    
                    //this section is a bit tricky.  There is no real shortcut to writing this down.  Go slowly over each column and row and make sure that there is an index to account for the first loop and the second.  Also note the direction of each iteration from every face of the matrix.  If counting right to left, its 'last-offset'.  Top to down is just 'i' and left to right is also just 'i'.
                    a[first][i] = a[last-offset][first];
                    a[last-offset][first] = a[last][last-offset];
                    a[last][last-offset] = a[i][last];
                    a[i][last] = temp;
                }
            }
            return a
        }
        ```
* All in all, this was a much more challenging problem than I had initally thought.  Definitely need to go back and review this a couple of times before it becomes second nature.  I won't have the luxury of time on an interview.  It's either know the answer right away or not. 

### Redis

* What is [Redis?](https://redis.io/topics/faq)
  * Redis is a key-value store. It is an **in-memory but persistent on disk database.** 
  * It represents a different trade off where very high write and read speed is achieved with the limitation of **data sets that can't be larger than memory.**
  * Another advantage of in memory databases is that the memory representation of complex data structure is much simpler to manipulate compared to the same data structures on disk.
    * Redis can do a lot, with little internal complexity

* What's the Redis memory footprint?
  * An empty intance uses ~ 3MB of memory
  * 1 Million small Keys -> String Value pairs use ~ 85MB of memory
  * 1 Million Keys -> Hash value, presenting an object with 5 fields use ~ 160MB of memory.
  
---
## [ ] 6/8/19
---
## [ ] 6/9/19
---
## [ ] 6/10/19
---
## [ ] 6/11/19
---
## [ ] 6/12/19
---
## [ ] 6/13/19
---
## [ ] 6/14/19
---
## [ ] 6/15/19
---
## [ ] 6/16/19
---
## [ ] 6/17/19
---
## [ ] 6/18/19
---
## [ ] 6/19/19
---
## [ ] 6/20/19
---
## [ ] 6/21/19
---
## [ ] 6/22/19
---
## [ ] 6/23/19
---
## [ ] 6/24/19
---
## [ ] 6/25/19
---
## [ ] 6/26/19
---
## [ ] 6/27/19
---
## [ ] 6/28/19
---
## [ ] 6/29/19
---
## [ ] 6/30/19
---




