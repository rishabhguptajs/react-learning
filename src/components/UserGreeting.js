import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true   
      }
    }
    
  render() {
    return (
        this.state.isLoggedIn? 
        <div>Welcome Rishabh</div>:
        <div>Welcome Guest</div>
    ) 
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Rishabh</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

    // return message      
    // if(this.state.isLoggedIn){
    //     return (
    //     <div>Welcome Rishabh</div>
    //     )
    // }else{
    //     return (
    //     <div>Welcome Guest</div>
    //     )
    // }
  }
}

export default UserGreeting
