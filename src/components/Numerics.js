import React from 'react';
import CalculButton from './CalculButton';

class Numerics extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: props.value 
        }
    }

    render() {
        return (
            <CalculButton class="calculButton">
                <span class="numeric">{this.state.value}</span>
            </CalculButton>
        )
    }

}

export default Numerics;