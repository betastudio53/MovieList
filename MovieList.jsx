
import EachMovie from './EachMovie.js';

var MovieList = (props) => (
  <div>
      {props.movies.map((movie) => 
        <EachMovie key = {movie.title} movie = {movie.title}/>)
      }
  </div>
)
export default MovieList;



