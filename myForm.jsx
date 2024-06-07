export function myForm() {
    const [data, setData] = useState(createData)
       
    function handlerInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        setData(prevData => {
            const updated = {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            };
            return updated;
        });
    }
    function handleResetForm() {
        setData(createData);
    }

    function handleLogin(event) {
        event.preventDefault()
    }

    return (
        <div>
            <h3>My Form:</h3>
            <input name="username" value={data.username} onChange={handlerInputChange} />
            <input name="password" type="password" value={data.password} onChange={handlerInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handlerInputChange} />
            <button onClick={handleResetForm}>Reset</button>
            <button disabled={!data.username || !data.password} onSubmit={handleLogin}>Login</button>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}