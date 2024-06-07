import { useEffect, useState, useRef } from "react";

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);
    const prevCounterRef = useRef(initialValue);

    useEffect(() => {
        if (counter > prevCounterRef.current) {
            console.log("Counter increased from", prevCounterRef.current, "to", counter);
        } else if (counter < prevCounterRef.current) {
            console.log("Counter decreased from", prevCounterRef.current, "to", counter);
        }
        prevCounterRef.current = counter;
    }, [counter]);

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