import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Upload extends Component {
  constructor(){
    super();

    this.state = {
      brand: '',
      name: '',
      price: '',
      imageLink: '',
      description: '',
      productId: '',
      productColors: [],
      userId: ''
    }
    
  }
  componentDidMount() {
    this.setId()
  }

  setId = () => {
    this.setState({
      user_id: this.props.id
    })
  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const upload = this.props.uploadProduct(this.state);
    //console.log(this.state);
    // upload.then((data) => {

      
    // }).catch((err) => {
    //   console.log(err)
    // })
  }

  render(){
    console.log(this.state.user_id, "HERE IS USER ID ON THE UPLOAD PAGE")
    return (
      
      <Grid columns={4} padded style={{ height: '100vh'}}>  

        <Grid.Column>
        </Grid.Column>
        
        <Grid.Column style={{maxWidth: 400}}>
          <Header as='h2' textAlign='center'>
            Upload a Product
          </Header>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Brand:
              <Form.Input  type='text' name='brand' onChange={this.handleChange}/>
              Name:
              <Form.Input  type='text' name='name' onChange={this.handleChange}/>
              Price:
              <Form.Input  type='text' name='price' onChange={this.handleChange}/>
              Image Link:
              <Form.Input  type='text' name='imageLink' onChange={this.handleChange}/>
              Description:
              <Form.Input  type='text' name='description' onChange={this.handleChange}/>

    
              <Button fluid size='large' type='sumbit'>Submit</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default Upload;



