import React, { Component } from "react";
import "./App.css";
import fire from "./fire";

// step 1: create App Componet
// step 2: create text input fields and save button
// step 3: create a text state for the input field
// step 4: create a state of text field by each user input
// step 5: allow each input to be changed
class App extends Component {
  state = {
    text: "",
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    let messageRef = fire
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    fire.database().ref("messages").push(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="App-position">
        <input type="text" onChange={this.handleText} id="inputText" />
        <br />
        <button onClick={this.handleSubmit}> Save </button>
      </div>
    );
  }
}

export default App;
