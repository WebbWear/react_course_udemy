import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    // let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
           persons={this.state.persons} 
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler}/>
          
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>My New React App</h1>
        <p className={classes.join(' ')}>Everything is just JavaScript!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
