//app.jsx
import { Hello } from "./hello";
import { useState } from "react";
import { Message } from "./message";
import { Welcome } from "./welcome";
import { AlertClock } from "./alertClock";
import { CounterDisplay } from "./counterdisplay";
import { Clock } from "./clock";
import { MouseClicker } from "./mouseClick";
import { InteractiveWelcome } from "./interactiveWelcome";
import { MyForm } from "./myForm";
import { MyUncontrolledLogin } from "./uncontrolledLogin";
import { MyList } from "./myList";
import { Colors } from "./colors";
import { Todolist } from "./toDoList";
import { Todolist2 } from "./toDoList2";
import { Container } from "./container";
import { GithubUser } from "./gitHubUser";
import { GithubUsers } from "./gitHubUsers";
import { LanguageContext } from "./languageContext";
import { LocationComponent } from "./locationComponent";
export function App() {
  const [language, setLanguage] = useState('en')

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }
  return(
    <div>
   <option value={"it"}>IT</option>
        <option value={"en"}>EN</option>
        <Container title={<h1>My Page to try</h1>}>
        <LanguageContext.Provider value={language}>
          <Hello />
          <Message />
          <hr />
          <Welcome name="Valentina" age={23} />
          <GithubUser username="valentinaattardo" />
          <GithubUsers />
          <AlertClock />
          <CounterDisplay />
          <Clock />
          <MouseClicker />
          <InteractiveWelcome />
          <MyUncontrolledLogin />
          <MyList
            items={[
              { id: 1, name: "Jane", age: 20 },
              { id: 2, name: "Luke", age: 30 },
              { id: 3, name: "Saul", age: 40 },
              { id: 4, name: "Vince", age: 45 },
            ]}
          />
          <Colors
            colors={[
              { id: 1, name: "red" },
              { id: 2, name: "blue" },
              { id: 3, name: "white" },
              { id: 4, name: "yellow" },
            ]}
          />
          <Todolist initialTodos={["Cook", "Sleep", "Play Music", "Sport"]} />
          <Todolist2 />
        </LanguageContext.Provider>
        <LocationComponent/>
      </Container>
</div>
     )}