import { Age } from "./age";

//welcome.jsx
export function Welcome({name,age}) {
  const WelcomeStyle = {
    backgroundColor: 'greenyellow',
    color: '#333',
  }
    return ( 
      <div style={WelcomeStyle}>
    <p>Welcome,{name}</p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
      <Age age={age} />
    </div>
  );
}
