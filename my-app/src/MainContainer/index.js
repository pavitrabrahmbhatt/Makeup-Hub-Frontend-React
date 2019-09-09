import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import Upload from '../UploadProduct'

class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      userId: '',
      username: ''
    }
    
  }
  componentDidMount() {
    
  }

  
  render(){
    console.log('main container')
    return (
      <div>
      <h1>main container hello {this.props.username}</h1>
      <Upload uploadProducts={this.uploadProducts} products={this.state.products}/>
      </div>
      )
  }
}

export default MainContainer;



