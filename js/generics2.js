"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Three ways to say the same thing
var last = function (arr) {
    return arr[arr.length - 1];
};
var lastGeneric = function (arr) {
    return arr[arr.length - 1];
};
var lastType = function (arr) {
    return arr[arr.length - 1];
};
// Using the famous type "T"
// We specify thet the generic is of type T using the angle bracket syntax
// We do not know wtf the data type is, but we expect to use an array of that data type in the params and return it.
var genericFunction = function (arr) {
    return arr[arr.length - 1];
};
// Know, our function adapts to the type passed in
var result1 = genericFunction(["Hola", "Como", "Estas", "Pedro"]);
// Know, the type assigned is "string", we could pass it splicitly using:
var result2 = genericFunction(['Otro', 'Array', 'De', 'Strings']);
// But our function could also work with numbers!
var result3 = genericFunction([1, 2, 3]);
// Generics allows us to give more flexibility to the functions we define.
// MultiGenerics
// We could use multiple generics.
var makeArr = function (x, y) {
    return [x, y];
};
// By default, generics are of type unknown.
// makeArr<string, string>(x:string,y:string): [string, string]
var r1 = makeArr("a", "b");
// makeArr<number, number>(x:number,y:number): [number, number]
var r2 = makeArr(1, 2);
// makeArr<string, number>(x:string, y:number): [string, number]
var r3 = makeArr("a", 3);
// We could pass it splicitly too
var r4 = makeArr(4, "b");
// Generics and objects
// <T extends {firstName: string; lastName: string}> means that we want a generic type but at least need to have a firstName and
// lastName property.
// But the generic itself is an object, so you will pass object properties and values.
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullname: obj.firstName + " " + obj.lastName });
};
var v1 = makeFullName({ firstName: "Xiomara", lastName: "Arellano", age: 4 });
console.log(v1);
