import { useState, useEffect } from "react"

const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;


  useEffect(() => {
      async function fetchMovies() {
          try {
              const response = await fetch(url);
              if (!response.ok) throw new Error("Failed to fetch data");
              const json = await response.json();
              setData(json.results || []);
          } catch (err) {
              setError(err.message);
          }
      }
      fetchMovies();
  }, [url]);

  return { data, error };
};

export default useFetch;
