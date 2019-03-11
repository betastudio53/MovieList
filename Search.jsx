class Search extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: ''
      };
    }

    handleClickInputChange(e) {
        this.props.handleInputChange(e.target.value);
        this.setState({
          value: e.target.value
        });
    }



    render() {
        return (
          <div>
            <input
              value ={this.state.value}
              onChange = {this.handleCLickInputChange.bind(this)}
            />
            <button>Go!!</button>
            </div>
        );
    }
}
export default Search;