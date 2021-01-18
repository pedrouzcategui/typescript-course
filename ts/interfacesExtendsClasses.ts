// Una interfaz que extiende una clase, no alreves

class Control {
    private state: any;
}

interface SelectableControl extends Control { // Hereda los metodos y variables privados y protegidos tambien
    select(): void;
}

class Button extends Control implements SelectableControl {
    select(){}
}

class TextBox extends Control{
    select(){}
};

// class ImageControl implements SelectableControl { // No es descendiente de Control, por lo tanto no puede implementar la interfaz

//s}