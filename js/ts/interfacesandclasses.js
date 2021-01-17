"use strict";
// Interfaces also allows classes to meet a particular contract or behaviour.
var Clock1 = /** @class */ (function () {
    function Clock1(h, m) {
        this.currentTime = new Date();
    }
    Clock1.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    ;
    return Clock1;
}());
