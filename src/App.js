import React, { Component } from "react";
export default class contador extends Component {
  state = {
    Number: 0
  };

  add = () => {
    this.setState((heineken) => ({ Number: heineken.Number + 1 }));
  };

  remove = () => {
    this.setState((bhrama) => ({ Number: bhrama.Number - 1 }));
  };

  render() {
    return (
      <>
        <h1>{this.state.Number}</h1>
        <button
          onClick={() => {
            this.add();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.remove();
          }}
        >
          -
        </button>
      </>
    );
  }
}
