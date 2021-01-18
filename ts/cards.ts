// let deck = {
//     suits: ["hearts","spades","clubs","diamonds"],
//     cards: Array(52),
//     createCardPicker: function(){
//         return ()=>{
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
// 
//             return { suit: this.suits[pickedSuit], card: pickedCard % 13}
//         }
//     }
// }
// 
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log(pickedCard.card, pickedCard.suit);

function f(this: void){
    // Making sure `this` is unusable in this standalone function.
}

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    // This means that the createCardPicker returns an arrow function, and the createCardPicker function expects to be called on
    // the Deck object.
    createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
    suits: ["Diamonds","Hearts","Spades","Clubs"],
    cards: Array(52),
    createCardPicker: function(this: Deck){ // theCreateCardPicker expects to be Called on a Deck Object
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
    
            return {suit: this.suits[pickedSuit], card: pickedCard % 13}
        }
    }
}