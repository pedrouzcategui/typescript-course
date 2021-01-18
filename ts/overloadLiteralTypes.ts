function createElement(tagname: "img"): HTMLImageElement;
function createElement(tagname: "input"): HTMLInputElement;
function createElement(tagname: string): Element {
    return new Element();
}

