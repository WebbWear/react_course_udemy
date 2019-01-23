import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Jeff', age: 45 },
      { name: 'Kathleen', age: 45 },
      { name: 'Anastasia', age: 10 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
       persons: [
        { name: 'Donkey', age: 45 },
        { name: 'Kitty', age: 45 },
        { name: 'Bunny', age: 10 }
    ]
  } )
  }  

  render() {
    return (
      <div className="App">
        <h1>My New React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons [0].name} age={this.state.persons [0].age} />
        <Person name={this.state.persons [1].name} age={this.state.persons [1].age}>Is Cool!</Person>
        <Person name={this.state.persons [2].name} age={this.state.persons [2].age}>Is the Best...ist Daughter!!!!</Person>


      </div>
    );
  }
}

export default App;
