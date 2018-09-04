import React, { Component } from 'react';


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this,id);
    }

    handleClick(id,e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log(id)
    }

    render() {
        let id = 'name'
        return (
            <button onClick={this.handleClick.bind(this,id)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle;
