"use strict";
// We can create our custom types
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing == "ease-in") { }
        else if (easing == "ease-out") { }
        else if (easing == "ease-in-out") { }
        else {
            // If someone ignore the types
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(2,2,"uneasy"); Argument of type '"uneasy"' is not assignable to parameter of type 'Easing'.
