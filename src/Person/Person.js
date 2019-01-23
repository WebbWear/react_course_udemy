import React, { Component } from 'react';

class person extends Component {
    render(props) {
        return (
            <div>
                <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default person;
