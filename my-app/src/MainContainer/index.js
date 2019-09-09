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
      username: '',
      products: []
    }
    
  }
  componentDidMount() {
    
  }

  uploadProduct = async (data) => {

      try {
      
         const addProductResponse = await fetch('http://localhost:3000/products/upload', {
            method: 'POST',
            credentials: 'include',// on every request we have to send the cookie
            body: JSON.stringify(data),
            headers: {
               'Content-Type': 'application/json'
            }
         })

         const parsedResponse = await addProductResponse.json();

         const newList = this.state.products

         const newProduct = parsedResponse.data

         newList.push(newProduct)

         this.setState({
            products: newList
         })

      } catch(err){
         console.log(err);
      }
   }


  
  render(){
    console.log('this.state in main container')
    console.log(this.state);
    console.log(this.props);

    return (
      <div>
      <h1>main container hello {this.props.username}</h1>

      <Upload uploadProduct={this.uploadProduct} products={this.state.products}/>
      </div>
      )
  }
}

export default MainContainer;



