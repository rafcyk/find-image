import React from 'react';

let clickToWin = 0;
let numberClick = 0;
let firstImage = '';
let secondImage = '';
let previousImage;
let thisImage;

const ChooseImage = (props) => {

    const handleClickImage = (e) => {

        if (numberClick === 0) {
            firstImage = e.target.getAttribute('name');
            e.target.id = 'active';
            previousImage = e.target;
            numberClick++;
        }
        else if (numberClick === 1 && e.target.id !== 'active') {

            secondImage = e.target.getAttribute('name');
            e.target.id = 'active';
            thisImage = e.target;
            if (secondImage === firstImage) {

                clickToWin++;

                if (clickToWin === props.randomFirst.length) {
                    setTimeout(() => {
                        document.querySelector('div.againContainer').classList.add('activeAgain');
                    }, 200)
                    document.querySelector('div.timerContainer p.timer').classList.remove('activeTime');
                    clickToWin = 0;
                    props.stopTimer();
                }

            } else {
                setTimeout(() => {
                    previousImage.id = 'disactive';
                    thisImage.id = 'disactive';
                }, 200)
            }

            numberClick = 0;
            firstImage = '';
            secondImage = '';
        }
    }




    const imagesListFirst = props.randomFirst.map((image) => {
        return (
            <div className="cont"> <div name={image.name} id='disactive' className='square' onClick={handleClickImage}> </div><img src={image.url} alt='hide' /></div>
        )
    });

    const imagesListSecond = props.randomSecond.map((image) => {
        return (
            <div className="cont"> <div name={image.name} id='disactive' className='square' onClick={handleClickImage}></div><img src={image.url} alt='hide' /></div>
        )
    });

    return (
        <section className='game'>
            <div className='container'>{imagesListFirst} {imagesListSecond} </div>

        </section>
    );
};

export default ChooseImage;