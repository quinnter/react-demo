import React from 'react'

export default function Hooks() {

    const [message, setMessage] = React.useState('')
    const [number, setNumber] = React.useState(0)
    const [someList, setSomeList] = React.useState([])

    const handleButtonClick = () => {
        setMessage('You really hooked me in!')
    }

    return (
        <div>
            <text className="Title">Hooks</text>
            <div className="InnerBox">
                <button onClick={handleButtonClick}>
                    Hook Me!
                </button>
                <text>{message}</text>
            </div>
        </div>
    )
}
