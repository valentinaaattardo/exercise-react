import { useState } from "react"

export function Container({title, children}) {
const [toggle, setToggle] = useState(false)


function handleToggleCollapse() {
    setToggle((t) => !t)
}


    return (
        <div className="app flex justify-center items-center min-h-screen">
            <div className="title-app text-red-600">{title} <button onClick={handleToggleCollapse}>Toggle content</button></div>
            {/* {!toggle && <div className="content-app">{children}</div>} */}
            <div className={!toggle ? "content-app" : "content-app-hidden"}>{children}</div>
        </div>
    )
}