import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class ShowProduct extends Component {
  constructor(){
    super();

    this.state = {
      brand: '',
      name: '',
      price: '',
      imageLink: '',
      category: '',
      description: '',
      productId: '',
      productColors: [],
      userId: ''
    }
    
  }

  render(){
    //console.log(this.state.user_id, "HERE IS USER ID ON THE UPLOAD PAGE")
    return (
      
      <Grid columns={4} padded style={{ height: '100vh'}}>  

        <Grid.Column>
        </Grid.Column>
        
        <Grid.Column style={{maxWidth: 400}}>
          <Header as='h2' textAlign='center'>
            {this.state.name}
          </Header>
          <h2>{this.state.brand}</h2>
          <h2>{this.state.price}</h2>
          <h2>{this.state.description}</h2>
          <button onClick={this.props.favorite} class="ui toggle button">Favorite</button>
        </Grid.Column>
      </Grid>
      )
  }
}

export default ShowProduct;



