export function MouseClicker() {
    function handleButtonClick(event) {
      if (event.target.tagName !== 'IMG') {
          console.log(event.target.name)
      }
    }
  
    return (
      <div>
        <button name="One" onClick={handleButtonClick}>
          <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSE3zNnbeADg_Mk-hQ_A-cKTuUtXqdxfeAYYFOP7bGqkbXfp5fNMVVJcWwi7fRDLXg7xkmTSGGk2HqrsOQ8EYg" name='Duck' width={100} height={100} />
          Click Me!
        </button>
        <button name="Two" onClick={handleButtonClick}>
          Click Me!
        </button>
      </div>
    );
  }