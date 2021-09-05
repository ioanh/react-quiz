import React, { Component, useState, useRef } from 'react'

export default class Quiz extends Component {
    state = {
        timerCount: 60,
        question: '',
        answers: [],
    };

    questionNumber = 0;
    timerInterval;
    questionInterval;
    quizQuestions = [{question: 'What is this?', answers: ['Answer1', 'Answer2']}, {question: 'What is that?', answers: ['Answer3', 'Answer4']}, {question: 'What is wat', answers: ['Answer5', 'Answer6']}]

    componentDidMount(){
        this.setState(() => {
            return {
                question: this.quizQuestions[0].question,
                answers: this.quizQuestions[0].answers
            }
        })

        this.questionInterval = setInterval(() => {
            this.questionNumber += 1;
            this.setState(() => {
                return {
                    question: this.quizQuestions[this.questionNumber].question,
                    answers: this.quizQuestions[this.questionNumber].answers,
                    timerCount: 60
                }
            })
        }, 60000)

         this.timerInterval = setInterval(() => {
            this.setState(prevState => {
                return {
                    timerCount: prevState.timerCount - 1,
                }
            })
        }, 1000)
    }

    nextQ = () => {
        clearInterval(this.questionInterval)
        this.questionNumber += 1;
        this.setState(() => {
            return {
                question: this.quizQuestions[this.questionNumber].question,
                answers: this.quizQuestions[this.questionNumber].answers,
                timerCount: 60
            }
        })        
        this.questionInterval = setInterval(() => {
            this.questionNumber += 1;
            this.setState(() => {
                return {
                    question: this.quizQuestions[this.questionNumber].question,
                    answers: this.quizQuestions[this.questionNumber].answers,
                    timerCount: 60
                }
            })
        }, 60000)
    }

    cancelInt = () => {
        clearInterval(this.timerInterval)
    }

    resetInt = () => {
        this.setState(prevState => {
            return {
                count: 100,
            }
        })
    }

    render() {
        return (
        <div id="wrapper">
            <div class="quiz">
                <progress value={this.state.timerCount} max="60"></progress>
                <p>{this.state.question}</p>
                <ol type="A">
                    <li onClick={this.nextQ}>{this.state.answers[0]}</li>
                </ol>
            </div>
        </div>
        )
    }
}
