import React from 'react';

class EqualButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleEqual = this.handleEqual.bind(this);
    }

    handleEqual() {
        this.props.onEqualClick();
    }

    render() {
        return <div class="Calcul-button" onClick={this.handleEqual}>=</div>
    }
}

export default EqualButton;