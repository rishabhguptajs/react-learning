import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state={
            message : 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Thank you for subscribing'
        })
    }
    unChangeMessage(){
        this.setState({
            message : 'Welcome Visitor'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        <button onClick={() => this.unChangeMessage()}>Unsubscribe</button>
      </div>
    )
  }
}

export default Message