class Add extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        added: ''
      };
    }

    handleClickAddChange(e) {
        this.props.handleAddMovie(e.target.value);
        this.setState({
          added: e.target.value
        });
    }



    render() {
        return (
          <div>
            <input
              added ={this.state.value}
              onChange = {this.handleCLickAddChange.bind(this)}
            />
            <button>ADD!!</button>
            </div>
        );
    }
}
export default Add;