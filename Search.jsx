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
          <form>
            <input
              value ={this.state.value}
              onChange = {this.handleClickInputChange.bind(this)}
            />
            <input value ="Go!!"/>
            </form>
        );
    }
}
export default Search;