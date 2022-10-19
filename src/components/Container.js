import React from 'react'

export default function Container() {
    return (
        <div className='container'>
            <div className='steps'>
                <div className='steps-item'></div>
                <div className='steps-item'></div>
                <div className='steps-item-1'></div>
                <div className='steps-item-1'></div>
                <div className='steps-item-1'></div>
                <div className='steps-item-1'></div>

            </div>
            <button className='previous-question'> ← Previous </button>
            <div className='container-item'>

                <div className='whQuestion'><p>QUESTİON 2/6</p></div>
                <div className='question'>What is your ideal workplace ?</div>
                <div className='answer'>
                    <p className='answer-item'><input type="radio" /><label >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, reiciendis.</label></p>
                    <p className='answer-item'><input type="radio" /><label >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, reiciendis.</label></p>
                    <p className='answer-item'><input type="radio" /><label >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, reiciendis.</label></p>
                    <p className='answer-item'><input type="radio" /><label >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, reiciendis.</label></p>
                </div>
                <button className='next-question'>Next Question →</button>
            </div>



        </div>
    )
}
