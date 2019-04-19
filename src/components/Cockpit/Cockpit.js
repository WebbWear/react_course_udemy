import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    btnClass = classes.Red;
    if (props.persons.length <= 2) {
      classes.push('red'); // classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>My New React App</h1>
            <p className={classes.join(' ')}>Everything is just JavaScript!</p>
            <button 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;