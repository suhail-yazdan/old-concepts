import "./App.css"
import React, {Component, createRef} from "react";
import {ClassComponent01, ClassComponent02} from "./Components/classComponents/ClassComponents"
import { 
  Condition01, 
  Condition02, 
  Condition03, 
  Condition04, 
  Condition05, 
  Condition06 
} from "./Components/ConditionalRendering/Conditions";
import BlueBox from "./Components/LifecycleMethods/BlueBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: true,
    };
    this.blueBoxRef = createRef();
  }

  handleDeleteBox = () => {
    this.setState({ showBox: false });
    console.log('Box deleted');
  };

  handleShowBox = () => {
    this.setState({ showBox: true });
    console.log('Box shown');
  };

  handleUpdateBox = () => {
    this.blueBoxRef.current.updateBox();
    console.log('Update Box button clicked');
  };

  render() {
    return(
      <>
        <div className="container">
          <h1>Class Components</h1>
          <ClassComponent01 />
          <ClassComponent02 name="John" />

          <hr />

          <h1>Life Cycle Methods</h1>
          {this.state.showBox && <BlueBox ref={this.blueBoxRef} />}
          <button onClick={this.handleDeleteBox} className="btn-grey">Delete Box</button>
          <button onClick={this.handleShowBox} className="btn-grey">Show Box</button>
          <button onClick={this.handleUpdateBox} className="btn-grey">Update Box</button>

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
