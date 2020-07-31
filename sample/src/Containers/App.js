import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[app.js] constructor');
  }
  
  state = {
    persons:[
      {id: 1,name: 'Bhavana', age: 21},
      {id: 2,name: 'Teju', age: 24},
      {id: 3,name: 'Akanksha', age: 25}
    ],
    showPersons:false
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    console.log("render");
    let persons = null;

    if(this.state.showPersons){
      persons = 
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>
    }
    return (
        <div className="App">
          <Cockpit 
            title = {this.props.appTitle}
            persons = {this.state.persons}
            showPersons = {this.state.showPersons}
            clicked = {this.togglePersonsHandler} />
          {persons}
        </div>
      );
  }
}

export default Radium(App);
