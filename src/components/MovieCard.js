import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, index }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      <Link to={`/movie/${index}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
