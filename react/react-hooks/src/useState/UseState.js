import {useState} from "react"


const UseState = () => {
    const [counter, seCounter] = useState(0)
    const [inputValue, setInputValue] = useState('maruf')

    const handleIncrement = () => {
        const prevCount = counter
        seCounter(prevCount + 1)
    }

    const handleDecrement = () => {
        const prevCount = counter
        seCounter(prevCount - 1)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <br />
            <br />
            <button onClick={handleDecrement}>Decrement</button>
            <br />
            <br />
            <input type="text" onChange={handleChange}/>
            {inputValue}
        </>
    )
}

export default UseState