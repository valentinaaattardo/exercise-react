export function AlertClock() {
    function handleButtonClick() {
        const now = new Date()

        alert(`The current time is ${now.toLocaleTimeString()}`)
    }
    return (
        <div>
      <button onClick={handleButtonClick}>Current time</button>
      </div>
    );
  }