//app.jsx
import { Hello } from "./hello";

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
import { Color } from "./color";
import { Colors } from "./colors";
import { Todolist } from "./toDoList";
export function App() {
  const showCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };
  return(
    <div className="app">
      <h2>My application</h2>
      <hr />
      <Hello />
      <Message />
      <Welcome name= 'John' age= {17}/>
      <AlertClock/>
      <CounterDisplay/>
      <Clock/>
      <MouseClicker/>
      <InteractiveWelcome/>
      <MyForm/>
      <MyUncontrolledLogin/>
      <MyList items={[
          { id: 1, name: "Jane", age: 20 },
          { id: 2, name: "Luke", age: 30 },
          { id: 3, name: "Saul", age: 40 },
          { id: 4, name: "Vince", age: 45 },
        ]} />

<Colors colors = {[
        {id: 1, name: 'red'},
        {id: 2, name: 'blue'},
        {id: 3, name: 'white'},
        {id: 4, name: 'yellow'},
      ]} />

<Todolist initialTodos = {['Cook', 'Sleep', 'Play Music', 'Sport']} />
    </div> )}