import React from 'react';

const AgainButton = (props) => {
    return (
        <div className = 'againContainer'>
            <button className="again" onClick = {props.playAgain}>Play again</button>
            <p>Final time: {props.time}</p>
        </div>
    );
};

export default AgainButton;