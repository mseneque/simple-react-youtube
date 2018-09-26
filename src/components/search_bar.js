import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  // define the render method (every React class must have this)
  render() {
    return ( 
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }

// Event handler ( we want to know whenevre the text input has changed )
// onInputChange(event) {
//   // needs to pass to the input JSX
//   console.log(event.target.value);
// }


}



export default SearchBar;