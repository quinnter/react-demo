import React, { Component } from 'react'
import './App.css';
import ChildOfKeyIdeas from './ChildOfKeyIdeas'

export default class KeyIdeas extends Component {

    state = {
        message : '',
        buttonClick: false, 
    }

    handleButton = () => {
        this.setState({
            message: "I was clicked!"
        })
    }

    componentDidMount() {
        this.setState({
            message: "Something different"
        })
    }

    render() {
        return (
        <div className="LeftBox">
            {this.props.title ? <text className="Title">{this.props.title}</text> : <text className="Title">Key Ideas</text>}
            <div className="InnerBox">
                <text> - Render</text>
                <text> - Components</text>
                <text> - Props</text>
                <text> - State</text>
                <text> - setState</text>
            </div>
            <button onClick={this.handleButton}>
                Click Me
            </button>
            <text>{this.state.message}</text>
        </div>
        )
    }
}
