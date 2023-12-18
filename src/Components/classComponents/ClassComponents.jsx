import React, { Component } from 'react';


class ClassComponent01 extends Component {
  render() {
    return (
      <div>
        <h5>This is simple class component</h5>
      </div>
    );
  }
}

class ClassComponent02 extends Component {
  render() {
    return (
      <div>
        <h5>This is class component with props {this.props.name}!</h5>
      </div>
    );
  }
}

export {ClassComponent01, ClassComponent02};