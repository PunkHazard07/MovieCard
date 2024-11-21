import { useState, useEffect  } from "react"
import MovieCard from "./MovieCard"
import { Container } from "react-bootstrap";

const Movielist = () => {
  const [movies, setMovie] = useState([]);

  const handleMovie = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9555a2c2f7msh1a8c31e9c469eb7p17c803jsn5618b8aa499f',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
  setMovie(data)
} catch (error) {
	console.error(error);
}
  }
  useEffect(() => {
    handleMovie();
  }, [])

  const style = {
    cont: {
      display: 'flex',
      flexWrap: 'wrap',
      // justifyContent: 'center',
      margin: '30px 30px',
      padding: '20px',
      maxWidth: '1000px'
    },

  }

  return(
    <>
     <div>
        <h1>Top IMDb 100 Movies</h1>

        <div style={style.cont}>
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                description={movie.description}
                year={movie.year}
                rating={movie.rating}
                image={movie.image}
              />
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Movielist