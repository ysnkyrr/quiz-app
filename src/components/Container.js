import React, { useRef } from 'react'
import { useState } from 'react';


export default function Container() {
    const questions = [
        {
            questionText: 'Aylin in en sevdiği renk nedir?',
            answerOptions: [
                { asnwerText: 'Pembe', isCorrect: false },
                { asnwerText: 'Yeşil', isCorrect: false },
                { asnwerText: 'Siyah', isCorrect: true },
                { asnwerText: 'Mor', isCorrect: false }
            ],
        },
        {
            questionText: 'Aylin kaç yaşındadır?',
            answerOptions: [
                { asnwerText: '18', isCorrect: false },
                { asnwerText: '20', isCorrect: false },
                { asnwerText: '22', isCorrect: false },
                { asnwerText: '24', isCorrect: true }
            ],
        },
        {
            questionText: 'Aylin in en sevdiği yemek nedir?',
            answerOptions: [
                { asnwerText: 'Lahana', isCorrect: false },
                { asnwerText: 'Patates', isCorrect: false },
                { asnwerText: 'Yasinin yaptığı iskender', isCorrect: true },
                { asnwerText: 'Ispanak', isCorrect: false }
            ],
        },
        {
            questionText: 'Ne renk giyinmeyi sever?',
            answerOptions: [
                { asnwerText: 'Lacivert', isCorrect: false },
                { asnwerText: 'Aslanağzı', isCorrect: false },
                { asnwerText: 'Yavuağzı', isCorrect: true },
                { asnwerText: 'Siyah', isCorrect: false }
            ],
        },
    ]
    const answersRef = useRef(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButtonClick = () => {
        // const nextQuestion = currentQuestion + 1;
        // if (nextQuestion < questions.length) {
        //     setCurrentQuestion(nextQuestion)
        // } else {
        //     alert("Sınavın Sonuna Geldin Dostum!!")
        // };
        const answerİtem = answersRef.current.children
        for (
            let answer of answerİtem
        ) {
            const radioBtn = answer.children[0]
            for (
                let radio of radioBtn
            ) { console.log(radio.children[0]) }

        }


    }
    const previousButtonClick = () => {
        const previousQuestion = currentQuestion - 1;
        if (0 < previousQuestion) {
            setCurrentQuestion(previousQuestion)
        } else {
            alert("Sınavın Başına Geldin Dostum!!")
        }
    }

    return (
        <div className='container'>

            {/* <div className='steps'>
                <div className='steps-item'></div>
                <div className='steps-item'></div>
                <div className='steps-item-1'></div>
                <div className='steps-item-1'></div>
                <div className='steps-item-1'></div>
                <div className='steps-item-1'></div>
            </div> */}
            <button className='previous-question' onClick={previousButtonClick}> ← Previous </button>
            <div className='container-item'>
                <div className='whQuestion'><p>QUESTİON {questions.length}/6</p></div>
                <div className='question'>{questions[currentQuestion].questionText}</div>
                <div className='answer' ref={answersRef}>
                    {questions[currentQuestion].answerOptions.map((answerOptions) =>
                        (<div className='answer-item'><input type="radio" id={"question" + currentQuestion} /><label >{answerOptions.asnwerText}</label></div>))}



                </div>
                <button className='next-question' onClick={handleAnswerButtonClick}>Next Question →</button>
            </div>
        </div>
    )
}
