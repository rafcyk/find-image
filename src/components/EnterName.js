import React from 'react';

const EnterName = (props) => {
    const handleClickConfirm = () => {
        if (props.playerName.trim() === '') {
            alert('Enter your name :)');
        } else {
            document.querySelector('div.nameContainer').id = 'goUp';
            document.querySelector('p.name').classList.add('activeName');
            document.querySelector('div.timerContainer p.timer').classList.add('activeTime');
            props.playTime();
        }
    }


    return (
        <div className='nameContainer'>
            <div className="wrapName">
                <p>Please enter your name</p>
                <input type="text" value={props.playerName} onChange={props.handleChange} />
                <button onClick={handleClickConfirm}>Start</button>
            </div>
        </div>
    );
};

export default EnterName;