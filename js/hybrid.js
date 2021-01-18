"use strict";
function getCounter() {
    var counter = function (start) { }; // Acting as a function
    counter.interval = 123; // But also as an object, that is a Hybrid Type
    counter.reset = function () { };
    return counter;
}
var c2 = getCounter();
c2(10);
c2.reset();
c2.interval = 5;
