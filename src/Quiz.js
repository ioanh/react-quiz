import React, { Component, useState, useRef } from 'react'

export default class Quiz extends Component {
    state = {
        timerCount: 60,
        question: '',
        answers: [],
    };
    timerInterval;
    questionInterval;
    quizQuestions = [{question: 'What is this?', answers: ['Answer1', 'Answer2']}, {question: 'What is that?', answers: ['Answer3', 'Answer4']}]

    componentDidMount(){
        this.setState(() => {
            return {
                question: this.quizQuestions[0].question,
                answers: this.quizQuestions[0].answers
            }
        })

        this.questionInterval = setInterval(() => {
            this.setState(() => {
                return {
                    question: this.quizQuestions[1].question,
                    answers: this.quizQuestions[1].answers,
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
                <p onClick={this.resetInt}>{this.state.question}</p>
                <ol type="A">
                    <li>{this.state.answers[0]}</li>
                </ol>
            </div>
        </div>
        )
    }
}
