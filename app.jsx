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
export function App() {
  const showCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };
  return(
    <div>
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
    </div> )}