import { useContext, useEffect, useState } from "react";
import classes from "./Clock.module.css";
import { LanguageContext } from "./languageContext";

export function Clock() {
    
    const [date, setDate] = useState(new Date());
    const language = useContext(LanguageContext);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [date]);

    return (
        <div className={classes.clockColor}>
          <h2>
            {language === "en"
              ? `The Actually Current Time is: ${date.toLocaleTimeString()}`
              : `L'ora corrente è: ${date.toLocaleTimeString()}`}
          </h2>
        </div>
      );
    }