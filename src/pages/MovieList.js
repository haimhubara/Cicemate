import { Card } from "../component";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const MovieList = ({ apiPath, title }) => {
  const { data: movies, error } = useFetch(apiPath);

  // Always call useEffect
  useEffect(() => {
    document.title = `${title} / Cinemate`;
  }, [title]);

  // Handle early return conditions after hooks
  if (error) return <p>Error: {error}</p>;
  if (!movies.length) return <p>Loading...</p>;

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
