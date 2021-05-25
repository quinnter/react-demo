import React from 'react'
import Hooks from './Hooks'
import './App.css';

export default function LifeCycle() {
    return (
        <div className="RightBox">
            <text className="Title">Life Cycle</text>
            <div className="InnerBox">
                <text> - ComponentDidMount</text>
                <text> - ComponentDidUpdate</text>
            </div>
            <Hooks/>
        </div>
    )
}
