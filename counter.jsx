import { useEffect, useState } from "react"

export function Counter({initialValue = 0}) {
const [ counter, setCounter ] = useState(initialValue)

useEffect(() => {
    console.log(`The value of the counter is ${counter}`)
}, [counter])

function handleCounterIncrement() {
    // setCounter(counter + 1)
    setCounter((c) => c + 1)
}
function handleCounterDecrement() {
    // setCounter(counter - 1)
    setCounter((c) => c - 1)
}
function handleCounterReset() {
    setCounter(initialValue)
}
    return (
        <div>
            <h2>I have counted to {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}