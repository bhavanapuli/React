import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
  const style = {
    backgroundColor: 'green',
    font: 'inherit',
    border:'1px solid blue',
    padding:'8px',
    cursor:'pointer',
    ':hover':{
      backgroundColor:'lightgreen',
      color:'black'
    }
  }

  if(props.showPersons){
    style.backgroundColor = 'pink';
    style[':hover'] = {
      backgroundColor:'salmon',
      color:'black'
    };
  }
  const classes = [];

    if(props.persons.length <= 2){
      classes.push('red');
    }

    if(props.persons.length <= 1){
      classes.push('bold');
    }
    
    return(
        <div>
          <h1>{props.title}</h1>
          <p className = {classes.join(' ')}>This is working</p> 
          <button 
           style = {style}
           onClick={props.clicked}>Toggle
         </button>
        </div>
        
    );
}

export default cockpit;