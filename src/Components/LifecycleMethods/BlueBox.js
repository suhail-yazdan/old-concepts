import React, { Component } from 'react';
import '../../App.css'

class BlueBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'This is a blue box component',
    };
  }

  componentDidMount() {
    console.log('BlueBox component mounted');
  }

  componentDidUpdate() {
    console.log('BlueBox component updated');
  }

  componentWillUnmount() {
    console.log('BlueBox component will unmount');
  }

  updateBox = () => {
    this.setState({ message: 'Blue box is updated' }, () => {
      console.log('Blue box is updated');
    });
  };

  render() {
    return (
      <div className="blueBox">
        {this.state.message}
      </div>
    );
  }
}

export default BlueBox;
