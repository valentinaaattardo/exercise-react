import { useEffect, useState, useRef } from "react";
import classes from './counter.module.css'

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
                        <p className={counter % 2 === 0 ? classes.evenBg : classes.oddBg}>I have counted to {counter}</p>
            <button className={classes.button} onClick={handleCounterIncrement}>Increment</button>
            <button className={classes.button} onClick={handleCounterDecrement}>Decrement</button>
            <button className={classes.button} onClick={handleCounterReset}>Reset</button>

        </div>
    )
}