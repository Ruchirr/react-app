import React from 'react'
import App from './App'
class hello extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage(){
      this.setState({
        message: "my friend (from changed state)!"
      });
    }

    render() {
        return (
          <div>
        <h1>Hello {this.state.message}!</h1>
        <button onClick={this.updateMessage}>Click!</button>
        <App message="asdf" />
        <App message="dgbryteb" />
      </div>

      )
    }
}
export default hello;
