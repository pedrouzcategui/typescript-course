"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("something failed");
}
function infiniteLoop() {
    while (true) { }
    ;
}
