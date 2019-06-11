//primitive data types are passed as a frozen copy of themselves into a function

var funcs = [];

for (var i = 0; i < 3; i++) {      // let's create 3 functions
    funcs[i] = function () {          // and store them in funcs
        console.log("My value: " + i); // each should log its value.
    };
}

for (var j = 0; j < 3; j++) {
    funcs[j]();                      // and now let's run each one to see
}

// Well, the problem is that the variable i, within each of your anonymous functions, is bound to the same variable outside of the function.

// Classic solution: Closures
// What you want to do is bind the variable within each function to a separate, unchanging value outside of the function:

var funcs = [];

function createfunc(i) {
    return function () { console.log("My value: " + i); };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}

var myfunc = []

function makeFunc(i) {
    return function () { console.log(`This num is ${i}`) };
}

for (var i = 0; i < 4; i++) {
    myfunc[i] = makeFunc(i);
}

for (var i = 0; j < 4; i++) {
    myfunc[i]();
}