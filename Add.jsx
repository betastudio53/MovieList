class Add extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: '',
        //movies: this.props.movies
      };
    }

    handleClickAddChange(e) {  
      this.setState({
        value: e.target.value
      });
      
    }
  //   handleAddMovie(){
  //     var newAdd = {};
  //     newAdd.title = this.state.added;
  //     this.setState({
  //         movies : this.props.movies.unshift(newAdd)
  //     })
  // }
    //  handleSubmit(event) {
    //   event.preventDefault();
    //   this.setState({
    //     movies : this.props.movies.concat({title : this.state.value})
    //   });
     
    //  }

    render() {
        return (
          <form >
            <input
              value ={this.state.value}
              onChange = {this.handleClickAddChange.bind(this)}
            />
            <input onClick={()=>this.props.handleAddMovie(this.state.value)} value ="Add!!"/>
            {/* <input onClick = {this.handleAddMovie.blind(this)} value ="Add!!"/> */}
          </form>
        );
    }
}
export default Add;