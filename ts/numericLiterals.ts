function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 { // Numeric Literal Types
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}      

const result = rollDice();
