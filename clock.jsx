import { useEffect, useState } from "react";



export function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [date]); 

    return (
        <div>
            <h2>Current Time: {date.toLocaleTimeString()}</h2>
        </div>
    );
}