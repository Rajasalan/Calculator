import React, { Component } from "react";
import "./App.css";
import { Button } from "./Component/Button";
import { Input } from "./Component/Input";
import { ClearButton } from "./Component/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  handlepercent = (val) => {
    this.setState({ input: math.evaluate(this.state.input  / 100) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={() => this.handlepercent()}>%</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


/* import React from 'react';
import './App.css';
import CalculatorResult from './Component/CalculatorResult';
import CalculatorKeys from './Component/CalculatorKeys';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
        result: 0
    }
}

onClick = button => {

    if(button === "="){
        this.calculate()
    }
    else if(button === "(" ){
      this.parenthesis()
  }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')){
        checkResult = this.state.result.replace('--','+')
        
    }

    else {
        checkResult = this.state.result
    }

    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(checkResult) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: 0
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

parenthesis =()=>{
  this.setState({
    result: this.state.result.concat('*(')
  })
};

render() {
    return (
        <div>
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                    <CalculatorResult result={this.state.result}/>
                    <CalculatorKeys onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
 */