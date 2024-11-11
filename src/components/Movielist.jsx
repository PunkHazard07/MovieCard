import { useState,  } from "react"
import MovieCard from "./MovieCard"

const Movielist = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);


    const handleSearch = async () => {
    
      const url = 
    `https://streaming-availability.p.rapidapi.com/shows/search/title?series_granularity=show&show_type=movie&output_language=en&title=${query}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1f820aeddbmshc0d8ad3855a8160p1123b2jsnf0ca1f3abf0a',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setMovies(result.result || []); //adjust this based on API response structure
} catch (error) {
	console.error(error);
}

    }
    
  return (
    <div>
      <input type="text"
      placeholder="search for a movie"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
       />
       <button onClick={handleSearch}>Search</button>

    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index}
        title={movie.title}
        overview={movie.overview}
        releaseYear={movie.releaseYear}
        showType={movie.genres}
        imageSet={movie.poster_path} //adjust this based on API response structure
       />
        
      ))}
    </div>

    </div>
  )
}

export default Movielist