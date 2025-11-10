import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://thegalileo.co.za/wp-content/uploads/2025/09/Inception-copy-686x1030.webp",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/LifqWf0BAOA?si=ZvVU4oNGASzB3OaH"
    },
    {
      title: "Interstellar",
      description: "Exploration through space and time.",
      posterURL: "https://m.media-amazon.com/images/I/71-uZ6tkY8L._AC_SL1500_.jpg",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E?si=z0z9VFPdk2MJ6CWC"
    },
    {
      title: "Mission: Impossible – The Final Reckoning",
      description: "A story about humanity, morality, and the price of doing what's right in a world ruled by technology.",
      posterURL: "https://posterspy.com/wp-content/uploads/2025/05/MI-THE-FINAL-RECKONING-TMDB-TEXT-2000X3000-480x720.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/fsQgc9pCyDU?si=o29hpJ1OibJTrg9S"
    },
    {
      title: "Black Panther",
      description: "It celebrates African culture, identity and leadership, while exploring themes of heritage, responsibility and justice.",
      posterURL: "https://m.media-amazon.com/images/I/713piAn+9qL._UF1000,1000_QL80_.jpg",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/xjDjIWPwcPU?si=LQ4yJcio2DaCoXfA"
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (

    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎬 My Movie App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                setFilterTitle={setFilterTitle}
                setFilterRating={setFilterRating}
              />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </div>

  );
}

export default App;
