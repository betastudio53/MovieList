
import MovieList from './MovieList.js';
import Search from './Search.js';
import Add from './Add.js';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        movies : this.props.movies
      };
    }
    
    handleInputChange(input){
      var newMovies = this.props.movies.filter(movie =>
      movie.title.includes(input))
      if (!newMovies.length) {
        newMovies = [{title : "No Movie Is Found"}];
      }
      this.setState({
        movies : newMovies
      })

    }

    handleAddMovie(input){
        var newAdd = {};
        newAdd.title = input;
        this.setState({
            movies : this.props.movies.unshift(newAdd)
        })
    }

    render() {
      return (
        <div>
        <h2>Movie List</h2>
        <div>
        <Add handleAddMovie ={this.handleAddMovie.bind(this)}/>
      </div>
        <div>
          <Search handleInputChange ={this.handleInputChange.bind(this)}/>
        </div>
        <div>
          <MovieList movies ={this.state.movies}/>
        </div>
        </div>
      );
    }
  
}
export default App;