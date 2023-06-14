import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

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
        <MemoComp name={this.state.name} ></MemoComp>
        {/* <RegularComp name={this.state.name} ></RegularComp> */}
        {/* <PureComp name={this.state.name} ></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
