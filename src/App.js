import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';import { FaFilm } from "react-icons/fa";

// inside your App component
<h1><FaFilm /> My Movie App</h1>


function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://thegalileo.co.za/wp-content/uploads/2025/09/Inception-copy-686x1030.webp",
      rating: 5
    },
    {
      title: "Interstellar",
      description: "Exploration through space and time.",
      posterURL: "https://m.media-amazon.com/images/I/71-uZ6tkY8L._AC_SL1500_.jpg",
      rating: 4
    },
    {
      title: "Mission:Impossible-The Final Reckoning",
      description: "It is about humanity, morality and the price of doing what's right in a world ruled by technology",
      posterURL: "https://posterspy.com/wp-content/uploads/2025/05/MI-THE-FINAL-RECKONING-TMDB-TEXT-2000X3000-480x720.jpg",
      rating: 5
    },
    {
      title: "Black Panther",
      description: "It celebrates Arican culture, identity and leadership,while exploring themes of heritage, responsibility and justice",
      posterURL: "https://m.media-amazon.com/images/I/713piAn+9qL._UF1000,1000_QL80_.jpg",
      rating : 5

    }
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>
      <Filter setFilter={setFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
