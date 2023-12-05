import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setsearchQuery] = useState('');
  const [searchResults, setsearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setsearchQuery(event.target.value);
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=af62c948c73d11660c8d6ea2e76a9d91&query=${searchQuery}`
        );
        const data = await response.json();
        setsearchResults(data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    if (searchQuery.trim() !== '') {
      searchMovies();
    }
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Movies</h2>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for movies..."
      />

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
