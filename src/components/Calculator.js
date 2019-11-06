import React from "react";
import CalculButton from "./CalculButton";
import EqualButton from "./EqualButton"
import InputFlow from "./InputFlow";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        operationFlow: [],
        display: ""
    };
    this.onCalculClick = this.onCalculClick.bind(this);
    this.onEqualClick = this.onEqualClick.bind(this);
    this.formatOperationFlow = this.formatOperationFlow.bind(this);
  }

  formatOperationFlow() {
    let result = "";
    this.state.operationFlow.map(value => result += value);
    return result;
  }

  onCalculClick(value) {
    this.state.operationFlow.push(value);
    this.state.display = this.formatOperationFlow(this.state.operationFlow);
    this.setState(this.state);
  }

  onEqualClick() {
    try {
        this.state.display = eval(this.state.display);
        this.state.operationFlow = [this.state.display];
        this.setState(this.state);
    } catch(e) {
        console.error("Invalid operation");
    }
  }

  render() {
    return (
      <div>
        <InputFlow operationFlow={this.state.display}></InputFlow>
        <div class="Operators">
          <CalculButton onCalculClick={this.onCalculClick} value="+" type="operator"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="-" type="operator"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="*" type="operator"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="/" type="operator"></CalculButton>
        </div>
        <div class="Numerics">
          <CalculButton onCalculClick={this.onCalculClick} value="1" type="numeric"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="2" type="numeric"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="3" type="numeric"></CalculButton>
          <br />
          <CalculButton onCalculClick={this.onCalculClick} value="4" type="numeric"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="5" type="numeric"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="6" type="numeric"></CalculButton>
          <br />
          <CalculButton onCalculClick={this.onCalculClick} value="7" type="numeric"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="8" type="numeric"></CalculButton>
          <CalculButton onCalculClick={this.onCalculClick} value="9" type="numeric"></CalculButton>
        </div>
        <div class="action">
            <EqualButton onEqualClick={this.onEqualClick}></EqualButton>
        </div>
      </div>
    );
  }
}

export default Calculator;
