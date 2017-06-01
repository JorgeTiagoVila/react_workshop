import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;
