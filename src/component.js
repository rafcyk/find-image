import React from 'react';

const component = () => {
    let numberClick = 0;
    let first = '';
    let second = '';
    
    const click = (e) => {
        numberClick++;

        if(numberClick === 1){
            first = e.target.getAttribute('name');
        }

        else if(numberClick === 2){
            second = e.target.getAttribute('name');
            if(second === first){
                console.log('sukces')
                numberClick = 0;
                first = '';
                second = '';
            }else{
                console.log('porażka');
                numberClick = 0;
                first = '';
                second = '';
            }
        }
         
    }

    return (
        <>
         <div name = 'one' onClick = {click}></div>
        <div name = 'two' onClick = {click}></div>
        </>
    );
};

export default component;