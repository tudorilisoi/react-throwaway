import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'

class App extends Component {

  constructor() {
    super()
    this.state = {
      buttonClicks: 0,
      lastClick: 'never',
    }
  }

  updateClicks() {
    const dateStr = new Date().toLocaleString()
    this.setState({
      buttonClicks: this.state.buttonClicks + 1,
      lastClick: dateStr,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
            Last click: {this.state.lastClick}
            </p>
            <p>
              React: button was clicked {this.state.buttonClicks} times

          </p>
          </a>
          <Button type={'submit'} text={'Go!'} />
          <Button
            onClick={() => this.updateClicks()}
            text={'I do nothing'} />
        </header>
      </div>
    );
  }
}

export default App;
