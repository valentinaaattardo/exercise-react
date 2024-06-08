import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("User not found!");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubUser();

    return () => {
      setData(null);
      setLoading(false);
      setError(null);
    };
  }, [username]);

  return { data, loading, error };
}