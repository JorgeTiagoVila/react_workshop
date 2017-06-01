import React, { Component } from 'react';

class Form extends Component {
    state = {
        firstName: '',
        lastName: ''
    };

    render() {
        return (
            <form>
                <input type="text"
                       placeholder="First Name"
                       value={this.state.firstName}
                       onChange={(event) => this.setState({ firstName: event.target.value })}
                />
                <input type="text"
                       placeholder="Last Name"
                       value={this.state.lastName}
                       onChange={(event) => this.setState({ lastName: event.target.value })}
                />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;
