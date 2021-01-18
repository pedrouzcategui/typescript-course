"use strict";
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
function f() {
    // Making sure `this` is unusable in this standalone function.
}
var deck = {
    suits: ["Diamonds", "Hearts", "Spades", "Clubs"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
