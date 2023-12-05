import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
  
    useEffect(() => {
      const fetchCast = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=af62c948c73d11660c8d6ea2e76a9d91`
          );
          const data = await response.json();
          setCast(data.cast);
        } catch (error) {
          console.error('Error fetching cast details:', error);
        }
      };
  
      fetchCast();
    }, [movieId]);
  
    return (
      <div>
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w100${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cast;
