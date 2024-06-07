import { useState } from "react";
import { Welcome } from "./welcome";

export function InteractiveWelcome() {
    const [name, setName] = useState('');

    function handlerNameChange(event) {
        const newName = event.target.value;
        setName(newName); 
    }

    return (
        <div>
            <Welcome name={name} />
            <input name="name" value={name} onChange={handlerNameChange} />
        </div>
    )
}
