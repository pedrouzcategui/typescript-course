interface UIElement {
    // addClickListener is a function that as a parameter receives a callback, and at the same time, that
    // callback makes this unusable, and receives and Event, returns void.
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    
    //info: string;

    onClickBad(this: Handler, e: Event){
//        this.info = e.message;
    }
}