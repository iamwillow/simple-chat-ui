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
      <div className="welcome-page">
        <form onSubmit={this.usernameSubmitHandler}>
          <h1>Welcome</h1>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Choose a username"
            required />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;