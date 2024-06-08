import { useState } from "react";
import {GithubUser} from './gitHubUser'

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== "" && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
    }
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {usernames.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}