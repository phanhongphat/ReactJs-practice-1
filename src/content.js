import React, { Component } from 'react';


class Demo extends Component {
    state ={
        stateNe: 0,
    }


    EventClick = () => {
        this.setState({
            stateNe: this.state.stateNe +111 // 112
        })


        this.props.ham(this.state.stateNe)

    }



    render() {
        return (
            <div onClick={() => this.EventClick()}>
                Click vo day ne
            </div>
        );
    }
}

export default Demo;
