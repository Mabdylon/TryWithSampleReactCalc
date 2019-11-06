import React from 'react';

class InputFlow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <span class="Input-flow">{this.props.operationFlow}</span>
            </div>
        )
    }
}

export default InputFlow;