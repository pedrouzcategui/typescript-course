"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.fullname = name;
    }
    ;
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.fullname;
        },
        set: function (newName) {
            this.fullname = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Pedro");
console.log(person.name);
person.name = "Juan";
console.log(person.name); // Get accessors doesn't need to be called.
