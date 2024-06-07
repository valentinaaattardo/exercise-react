import { useContext } from "react"
import { LanguageContext } from "./languageContext"

export function Hello() {
const language = useContext(LanguageContext)

    return <h2>{language === 'en' ? 'Hello World!' : 'Ciao Mondo!'}</h2>
}


