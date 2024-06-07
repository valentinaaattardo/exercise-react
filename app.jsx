//app.jsx
import { Hello } from "./hello";

import { Message } from "./message";
import { Welcome } from "./welcome";
import { AlertClock } from "./alertClock";
import { CounterDisplay } from "./counterdisplay";
import { Clock } from "./clock";
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
    </div> )}