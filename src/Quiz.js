import React, { Component, useState, useRef } from 'react'

export default class Quiz extends Component {
    state = {
        timerCount: 60,
        question: '',
        answers: [],
    };

    isGamePlaying = true;
    questionNumber = 0;
    timerInterval;
    questionInterval;
    quizQuestions = [{question: 'What does AD stand for in relation to Windows Operating Systems?', answers: ['Active Directory', 'Alternative Drive', 'Automated Database', 'Active Department']}, {question: 'The logo for Snapchat is a Bell.', answers: ['True', 'False']}, {question: 'To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form.', answers: ['True', 'False']}, {question: 'Which of these people was NOT a founder of Apple Inc?', answers:['Steve Jobs', 'Jonathan Ive', 'Ronald Wayne', 'Steve Wozniak']}, {question: 'When did the online streaming service Mixer launch?', answers:['2015', '2018', '2016', '2017']}, {question: 'Which programming language shares its name with an island in Indonesia?', answers:['C#', 'JavaScript', 'Python', 'Java']}, {question: 'According to DeMorgan Theorem, the Boolean expression (AB) is equivalent to:', answers:['A + B', 'AB + BA', 'AB', 'A + AB']}, {question: 'What was the name of the first Bulgarian personal computer?', answers:['Pravetz 82', 'Pratez 8D', 'IZOT 1030', 'IMKO-1']}, {question: 'Unix Time is defined as the number of seconds that have elapsed since when?', answers:['Midnight, January 1, 1970', 'Midnight, July 4, 1976', 'Midnight of the creater of Unix birthday', 'Midnight, July 4, 1980']}, {question: 'Lenovo acquired IBM& personal computer division, including the ThinkPad line of laptops and tablets, in what year?', answers:['2005', '1999', '2003', '1996']},]

    componentDidMount(){
        this.setState(() => {
            return {
                question: this.quizQuestions[0].question,
                answers: this.quizQuestions[0].answers
            }
        })

        this.questionInterval = setInterval(() => {
            if(this.questionNumber < 9){
                this.questionNumber += 1;
                this.setState(() => {
                    return {
                        question: this.quizQuestions[this.questionNumber].question,
                        answers: this.quizQuestions[this.questionNumber].answers,
                        timerCount: 60
                    }
                })
            }else{
                this.isGamePlaying = false;
                clearInterval(this.questionInterval)
            }
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
        if(this.questionNumber < 9){
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
        }else{
            this.isGamePlaying = false;
            clearInterval(this.questionInterval)
        }
        
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
        let game;
        if(this.isGamePlaying){
            game =  <div id="wrapper">
            <div class="quiz">
                <progress value={this.state.timerCount} max="60"></progress>
                <p>{this.state.question}</p>
                <ol type="A">
                    {/* <li onClick={this.nextQ}>{this.state.answers[0]}</li>
                    <li onClick={this.nextQ}>{this.state.answers[1]}</li>
                    <li onClick={this.nextQ}>{this.state.answers[2]}</li>
                    <li onClick={this.nextQ}>{this.state.answers[3]}</li> */}
                    {this.state.answers.map((value, index) => {
                        return <li onClick={this.nextQ} key={index}>{value}</li>
                    })}
                </ol>
            </div>
        </div>
        }else{
            game = <div class="quiz"><p>You have finished the Quiz!<br/>Thank you for playing!</p></div>
        }
        return (
        <div id="wrapper">
            {game}
        </div>
        )
    }
}
