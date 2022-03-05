import './counter.scss';

import React, { Component } from "react";

import Button from "../button/Button";

class Counter extends Component { 
  constructor(props) { 
    super(props);

    this.state = { 
      counter: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrease() {
    if (this.state.counter === 0)  return;
    this.setState({
      counter: this.state.counter - 1,
    });
  } 

  render() { 
      const {counter} = this.state;
    return (
      <div className='container'>   
        <label className='lbl-count'>{counter}</label>
        <div class='btn-container'>
          <Button title="Increase" clickHandler={this.increase} />
          <Button title="Decrease" clickHandler={this.decrease} />
        </div>
      </div>
    );
  }
}

export default Counter;
