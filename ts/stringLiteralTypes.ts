type Easing = "ease-in" | "ease-out" | "ease-in-out";
// We can create our custom types

class UIElement {
    animate(dx: number, dy: number, easing: Easing){
        if(easing == "ease-in"){}
        else if(easing == "ease-out"){}
        else if(easing == "ease-in-out"){}
        else{
            // If someone ignore the types
        }
    }
}

let button = new UIElement();
button.animate(0,0,"ease-in");
// button.animate(2,2,"uneasy"); Argument of type '"uneasy"' is not assignable to parameter of type 'Easing'.

