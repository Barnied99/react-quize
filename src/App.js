import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

  const que = [
    {
      questionText: 'Столица США?',
      answerOptions: [
        { answerText: 'Бостон', isCorrect: false },
        { answerText: 'Вашингтон', isCorrect: true },
        { answerText: 'Нью-йорк', isCorrect: false },
        { answerText: 'Лос-анджелес', isCorrect: false },
      ]
    },
    {
      questionText: 'Какая компания разработала React?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: false },
        { answerText: 'React', isCorrect: false },
        { answerText: 'Facebook', isCorrect: true },
        { answerText: 'keycompany', isCorrect: false },
      ]
    },
    {
      questionText: 'Что не относится к вселенной Marvel?',
      answerOptions: [
        { answerText: 'Бэтмен', isCorrect: true },
        { answerText: 'Халк', isCorrect: false },
        { answerText: 'Iron-man', isCorrect: false },
        { answerText: 'Человек-муравей', isCorrect: false },
      ]
    },
    {
      questionText: 'Что не является языком програмиирования?',
      answerOptions: [
        { answerText: 'JS', isCorrect: false },
        { answerText: 'HTML', isCorrect: true },
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Type-script', isCorrect: false },
      ]
    },

  ]

  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showscore, setShowscore] = useState(false)


  const handleAnsweroptionsclick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < que.length) {
      setcurrentQuestion(nextQuestion)
    } else {
      setShowscore(true)
    }
  }

  const refresh = () => {
    setcurrentQuestion(0)
    setScore(0)
    setShowscore(false)
  }


  return (
    <div className="app">


      {
        showscore ? <div className="section_score">
          <div>Правильных ответов {score} из {que.length}</div>
          <button
            onClick={refresh}
            className='refresh_'>Repeat</button>
        </div>
          : <div className="qui">
            <div className="question__section">
              <div className="question__count">
                <span>Вопрос {currentQuestion + 1}</span>/{que.length}
              </div>
              <div className="question__text">{que[currentQuestion].questionText}</div>
            </div>
            <div className="answer__section">
              {que[currentQuestion].answerOptions.map((el) =>
              (<button onClick={() => handleAnsweroptionsclick(el.isCorrect)}
              >{el.answerText}</button>)
              )}
            </div>
          </div>
      }



    </div>
  );
}







export default App;
