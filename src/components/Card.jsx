import React from 'react'
import ReactCardFlip from 'react-card-flip';

const Card = ({ avatar, name, isFlipped, matched, onFlip, idx }) => {

    return (
        <ReactCardFlip
            name={name}
            isFlipped={isFlipped}
            matched={matched}
            flipDirection="horizontal"
            infinite={true}
            >
            <div className="card" onClick={ isFlipped ? () => {} : () => onFlip(idx)} >
                <img src="./assets/front.jpg" alt="Avatar" />
            </div>
            <div className={matched ? "card matched" : "card"} onClick={ isFlipped ? () => {} : () => onFlip(idx)} >
                <img src={avatar} alt="Avatar" />
            </div>
        </ReactCardFlip>
    )



}

export default Card
