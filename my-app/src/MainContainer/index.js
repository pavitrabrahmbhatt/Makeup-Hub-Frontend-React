import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


import Home from '../Home'
import Profile from '../Profile'


class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      userId: '',
      username: '',
      veganProducts: [],
      drugstoreProducts: [],
      luxuryProducts: [],
      pageShowing: 'home' // 'vegan', 
    }
    
  }
  componentDidMount() {
    
  }
  showPage = (pg) => {
      // chanfe the value in state of what page is show
  }    

  


  
  render(){
    //console.log('this.state in main container')
    //console.log(this.state);
    //console.log(this.props);

    return (
      <div>
      <h1>main container hello {this.props.username}</h1>
      <Home veganProducts = {this.state.veganProducts}/>
      <Profile/>

        
      </div>
      )
  }
}

export default MainContainer;



