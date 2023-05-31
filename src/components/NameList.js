import React from "react";
import Person from "./Person";

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Rishabh",
            age: 20,
            skill: "React",
        },
        {
            id: 2,
            name: "Siddharth",
            age: 21,
            skill: "Angular",
        },
        {
            id: 3,
            name: "Drishan",
            age: 20,
            skill: "Vue",
        },
        {
            id: 4,
            name: "Girl",
            age: "forever",
            skill: "ladko ka kaatna",
        },
        {
            id: 5,
            name: "Gopal",
            age: 20,
            skill: "React",
        },
        {
            id: 6,
            name:"Krishna",
            age: 11,
            skill: "React",
        }
    ];
    const names = ['Rishabh', 'Siddharth', 'Drishan'];
    const nameList = names.map((name, index)=> <h2 key={index}>{index+1} {name}</h2>);
    return (
    <div>
        {nameList}
    </div>
    );
}

export default NameList;
