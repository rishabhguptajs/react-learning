import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Rishabh'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Rishabh'
            })
        } ,2000)
    }
  render() {
    console.log('*********Parent Comp render*********')
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} ></RegularComp>
        <PureComp name={this.state.name} ></PureComp>
      </div>
    )
  }
}

export default ParentComp
