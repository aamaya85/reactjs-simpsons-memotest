import React, { useState } from 'react';
import Card from './Card';
// https://codesandbox.io/s/react-card-flip-game-redi3?file=/src/GameBoard.jsx
const Board = () => {

    const avatars = [
        { src: "./assets/avatar01.png", name: "simpsons01" },
        { src: "./assets/avatar02.jpg", name: "simpsons02" },
        { src: "./assets/avatar03.jpg", name: "simpsons03" },
        { src: "./assets/avatar04.jpg", name: "simpsons04" },
        { src: "./assets/avatar05.jpg", name: "simpsons05" },
        { src: "./assets/avatar06.jpg", name: "simpsons06" },
        { src: "./assets/avatar07.jpg", name: "simpsons07" },
        { src: "./assets/avatar08.jpg", name: "simpsons08" },
    ]

    const randomOrder = (max) => {
        let randomKeys = [];
        while(randomKeys.length < max){
            let i = Math.floor(Math.random() * max);
            if(randomKeys.indexOf(i) === -1) randomKeys.push(i);
        }
        return randomKeys;
    }

    const boardGame = () => {
        const dupAvatars = avatars.concat(avatars);
        let board = [];
        randomOrder(dupAvatars.length)
            .forEach( (value, idx) => {
                board.push({
                    idx: idx,
                    avatar: dupAvatars[value].src,
                    name: dupAvatars[value].name,
                    isFlipped: false,
                    matched: false,
                })
            })
        return board
    }

    const [cardList, setCardList] = useState(boardGame);
    const [flippedCards, setFlippedCards] = useState([]);

    // Logic Game
    const playCard = (idx) => {
        
        /*
            1. Setear card como flipped
            2. Si llegamos a dos cards
                b. buscamos la coincidencia
                    1. Hay coincidencia:
                        - Dejar las cards flipped
                        - Cambiarles el estilo
                    2. No hay coincidencia
                        - reiniciamos el count de flippedCards
                        - damos vuelta todas las piezas
            3. renderizar
        */

        if (flippedCards.length === 2) return false;
       
        let updatedCardList = cardList.map((card, index) => {
            if (index === idx) card.isFlipped = !card.isFlipped
            return card
        });

        let updatedFlippedCards = flippedCards;
        updatedFlippedCards.push(updatedCardList[idx]);
        setFlippedCards(updatedFlippedCards)
        
        setCardList(updatedCardList);
        
        if (flippedCards.length === 2) {
            if (flippedCards[0].name === flippedCards[1].name) {
                setTimeout( () => {
                    updatedCardList[flippedCards[0].idx].matched = true
                    updatedCardList[flippedCards[1].idx].matched = true
                    setCardList(updatedCardList);
                    setFlippedCards([])
                }, 750); 
            } else {
                setTimeout( () => {
                    updatedCardList[flippedCards[0].idx].isFlipped = false
                    updatedCardList[flippedCards[1].idx].isFlipped = false
                    setCardList(updatedCardList);
                    setFlippedCards([])
                }, 1500)
            }
        }
        
    }

    return (
        <div className="board">
            {
                cardList.map( (card) => {
                    return (
                        <Card
                            key = {card.idx}
                            idx = {card.idx}
                            avatar = {card.avatar}
                            isFlipped = {card.isFlipped}
                            matched = {card.matched}
                            onFlip = {playCard}
                        ></Card>
                  )
                })
            }
        </div>
    )

}

export default Board

