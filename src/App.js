import React, { Component } from 'react';
import ChatRoom from './components/ChatRoom';
import './assets/styles/stylesheet.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({
      username: event.target.value
    });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({
      usernameIsSet: true,
      username: this.state.username
    });
  }

  render() {
    if(this.state.usernameIsSet){
      return (
        <ChatRoom username={this.state.username} />
      );
    }
    return (
      <form onSubmit={this.usernameSubmitHandler}>
        <h1>Welcome</h1>
        <input
          type="text"
          onChange={this.usernameChangeHandler}
          placeholder="Please create a username"
          required />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;