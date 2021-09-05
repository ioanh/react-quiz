import React, { Component, useState, useRef } from 'react'

export default class Quiz extends Component {
    state = {count: 100};
    intervalId;

    componentDidMount(){
         this.intervalId = setInterval(() => {
            this.setState(prevState => {
                return {
                    count: prevState.count - 1,
                }
            })
        }, 1000)
    }

    cancelInt = () => {
        clearInterval(this.intervalId)
    }

    render() {
        return (
        <div id="wrapper">
            <div class="quiz">
                <progress value={this.state.count} max="100"></progress>
                <p onClick={this.cancelInt}>What is this?</p>
                <ol type="A">
                    <li>This is the answer</li>
                </ol>
            </div>
        </div>
        )
    }
}
