"use strict";
function identity(arg) {
    return arg;
}
var output = identity("myString");
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// Another way to describe it
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
