import React from 'react'
import ReactCardFlip from 'react-card-flip';

const Card = ({ avatar, isFlipped, onFlip, idx }) => {

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card" onClick={() => onFlip(idx)} >
                <img src="./assets/front.jpg" alt="Avatar" />
            </div>
            <div className="card" onClick={() => onFlip(idx)} >
                <img src={avatar} alt="Avatar" />
            </div>
        </ReactCardFlip>
    )



}

export default Card
