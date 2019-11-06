import React from "react";

class CalculButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      type: props.type
    };
    this.addInputFlow = this.addInputFlow.bind(this);
  }

  addInputFlow(e) {
    this.props.onCalculClick(e.currentTarget.innerText);
  }

  render() {
    return (
      <span
        onClick={this.addInputFlow}
        className={this.state.type + " Calcul-button"}
      >
        {this.state.value}
      </span>
    );
  }
}

export default CalculButton;
