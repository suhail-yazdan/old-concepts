import "./App.css"
import React, {Component} from "react";
import {ClassComponent01, ClassComponent02} from "./Components/classComponents/ClassComponents"
import Card from "./Components/LifecycleMethods/Card";
import { 
  Condition01, 
  Condition02, 
  Condition03, 
  Condition04, 
  Condition05, 
  Condition06 
} from "./Components/ConditionalRendering/Conditions";

class App extends Component {
  state = {
    card: { id: 1, title: 'Card 1', description: 'Description 1', counter: 0 },
  };

  handleDeleteCard = (cardId) => {
    this.setState({ card: null });
    console.log(`Card with ID ${cardId} has been deleted.`);
  };


  render() {
    const { card } = this.state;

    return(
      <>
        <div className="container">
          <h1>Class Components</h1>
          <ClassComponent01 />
          <ClassComponent02 name="John" />

          <hr />

          <h1>Life Cycle Methods</h1>
          {card ? (
            <Card card={card} onDelete={this.handleDeleteCard} />
          ) : (
            <p>No card available.</p>
          )}

          <hr />

          <h1>Conditional Rendering</h1>
          <Condition01 />
          <Condition02 />
          <Condition03 />
          <Condition04 />
          <Condition05 />
          <Condition06 />
        </div>
      </>
    )
  }
}

export default App;
