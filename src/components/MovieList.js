import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movie-list" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} index={index} />
      ))}
    </div>
  );
}

export default MovieList;
