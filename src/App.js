import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Jeff', age: 45 },
      { id: 'b2', name: 'Kathleen', age: 45 },
      { id: 'c3', name: 'Anastasia', age: 10 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
      };

      //  const person = Object.assign({}, this.state.persons[personIndex]);

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangedHandler(event, person.id)} />
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
