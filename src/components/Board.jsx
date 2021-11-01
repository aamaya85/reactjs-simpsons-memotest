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
            .forEach( (index) => {
                board.push({
                    avatar: dupAvatars[index].src,
                    name: dupAvatars[index].name,
                    isFlipped: false,
                })
            })
        return board
    }

    const [cardList, setCardList] = useState(boardGame);

    // Logic Game
    const flipCard = (idx) => {
        let flippedCards = [];
        const updatedCardList = cardList.map((card, index) => {
            // Chequear que no haya más de dos cartas flipped
            // Si hay dos cartas flipped, chequear si coinciden
            // Si hay dos cartas flipped, bloquear acción
            // Si hay dos cartas flipped, unflip con un timeout
            // Si hay coincidencia dejar las cartas flipped

            


            if (!card.isFlipped) flippedCards.push(card)

            if (index === idx) card.isFlipped = !card.isFlipped
            return card
        });
        setCardList(updatedCardList);
    }

    return (
        <div className="board">
            {
                cardList.map( (card, idx) => {
                    return (
                        <Card
                            key = {idx}
                            idx = {idx}
                            avatar = {card.avatar}
                            isFlipped = {card.isFlipped}
                            onFlip = {flipCard}
                        ></Card>
                  )
                })
            }
        </div>
    )

}

export default Board

