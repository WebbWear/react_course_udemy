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
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
       persons: [
        { name: newName, age: 45 },
        { name: 'Kitty', age: 45 },
        { name: 'Bunny', age: 10 }
      ]
  } )
  }
  
  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Turtle', age: 45 },
        { name: event.target.value, age: 45 },
        { name: 'Bunny', age: 10 }
      ]
  } )
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
             name={person.name}
             age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>My New React App</h1>
        <button 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
      </div>
    );
  }
}

export default App;
