import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log(`Card with ID ${this.props.card.id} has mounted.`);
  }

  componentDidUpdate() {
    console.log(`Card with ID ${this.props.card.id} has been updated.`);
  }

  componentWillUnmount() {
    console.log(`Card with ID ${this.props.card.id} will unmount.`);
  }

  handleUpdate = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  handleDelete = () => {
    this.props.onDelete(this.props.card.id)
  };

  render() {
    const { card } = this.props;
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', maxWidth: '300px' }}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleUpdate}>Update</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Card




































// import React, { Component } from 'react';

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   componentDidMount() {
//     console.log('Card mounted');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // Only update if the counter is even
//     return nextState.counter % 2 === 0;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Card updated');
//   }

//   componentWillUnmount() {
//     console.log('Card will unmount');
//   }

//   handleUpdate = () => {
//     this.setState((prevState) => ({
//       counter: prevState.counter + 1,
//     }));
//   };

//   handleDelete = () => {
//     // Simulate component removal by calling a provided callback
//     this.props.onDelete();
//   };

//   render() {
//     const { id, title, description, counter } = this.props;

//     return (
//       <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <p>Counter: {counter}</p>
//         <button onClick={this.handleUpdate}>Update</button>
//         <button onClick={this.handleDelete}>Delete</button>
//       </div>
//     );
//   }
// }

// export default Card