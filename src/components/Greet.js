import React from 'react'

// function Greet(){
//     return <h1>Hello Rishabh</h1>
// }

const Greet = (props) => {
     return (
        <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
    )
}

export default Greet