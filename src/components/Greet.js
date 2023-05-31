import React from 'react'

// function Greet(){
//     return <h1>Hello Rishabh</h1>
// }

const Greet = ({name, heroName}) => {
     return (
        <h1>Hello {name} a.k.a. {heroName}</h1>
    )
}

export default Greet