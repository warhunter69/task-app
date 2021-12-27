import React, { Component } from 'react';
import Overview from './Component/Overview';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',title:'',listItems: []};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    this.setState({title: this.state.value, listItems: [...this.state.listItems, this.state.value],});
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          task
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
          {
            //this.state.listItems.map((li,key) => <li {...{key}}>{li}</li>)
            //this.state.listItems.map((a) => <div >{a}</div>)
            //this.state.listItems.map((li,key) 
            this.state.listItems.map((li,key) => <Overview title={li}{...{key}}/>)
          }
      </ul>
      
      </div>
    );
  }
}

export default App;