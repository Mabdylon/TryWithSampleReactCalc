import React from 'react';

class Operators extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value 
        }
    }

    render() {
        return (
            <span class="operator">{this.state.value}</span>
        )
    }

}

export default Operators;