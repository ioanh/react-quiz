import React, { Component, useState, useRef } from 'react'

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 100
        }
    }
    render() {
        const {count} = this.state
        setInterval(() => {
            this.state.count -= 1
        }, 1000)
        return (
        <div id="wrapper">
            <div class="quiz">
                <progress value={count} max="100"></progress>
                <p>What is this?</p>
                <ol type="A">
                    <li>This is the answer</li>
                </ol>
            </div>
        </div>
        )
    }
}
