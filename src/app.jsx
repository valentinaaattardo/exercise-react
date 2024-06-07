//app.jsx
import { Hello } from "./hello";

import { Message } from "./message";
import { Welcome } from "./welcome";
export function App() {
  return(
    <div>
      <h2>My application</h2>
      <hr />
      <Hello />
      <Message />
      <Welcome name= 'John' age= {17}/>
    </div> )}