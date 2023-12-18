import React, { Component } from 'react';

class Condition01 extends Component {
    render() {
      const isLoggedIn = true;
  
      if (isLoggedIn) {
        return <p>This is a first condition </p>;
      } else {
        return <p>This is a first condition's second option</p>;
      }
    }
}

class Condition02 extends Component {
    render() {
      const isLoggedIn = true;
  
      return isLoggedIn ? <p>This is a second condition</p> : <p>This is a second condition's second option</p>;
    }
}

class Condition03 extends Component {
    render() {
      const isLoggedIn = true;
  
      return isLoggedIn && <p>This is a third condition.</p>;
    }
}

class Condition04 extends Component {
    render() {
      const isLoggedIn = true;
      let message;
  
      if (isLoggedIn) {
        message = <p>This is a fourth condition.</p>;
      } else {
        message = <p>This is a fourth condition's second option</p>;
      }
  
      return message;
    }
}

class Condition05 extends Component {
    render() {
      const userType = 'admin';
  
      switch (userType) {
        case 'admin':
          return <p>This is a fifth condition</p>;
        case 'user':
          return <p>This is a fifth condition's second option</p>;
        default:
          return <p>This is a fifth condition's third option</p>;
      }
    }
}

class Condition06 extends Component {
  render() {
    const isLoggedIn = true;

    if (isLoggedIn) {
      return <p>This is a sixth condition</p>;
    } else {
      return <p>This is a sixth condition's second option</p>;
    }
  }
}

export {Condition01, Condition02, Condition03, Condition04, Condition05, Condition06 };