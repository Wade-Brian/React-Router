
import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDescription({ movies }) {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>

      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default MovieDescription;
