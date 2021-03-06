import React from "react";
import styled from 'styled-components';
import "./Person.css";

const person =  (props) => {
    console.log('[person.js] rendering...');
    return(
        <div className = "Person">
            <p onClick = {props.click}>I am  {props.name} and {props.age} years old</p>
            <p>{props.children}</p> 
            <input type = "text" onChange = {props.changed} value = {props.name}/>
        </div>
        
    )
}

export default person;