import React, { Component } from 'react';
import '../MainContainer/MainContainer.css'
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends Component {
   constructor(){
      super();

      this.state = {
         username: '',
         password: '',
      }
   }

   handleChange = async (e) => {
      this.setState({[e.target.name]: e.target.value}); 
   }

   handleSubmit = async (e) => {
      e.preventDefault();
      this.props.login(this.state);
   }





   render(){
      return (

         <Grid verticalAlign='middle' style={{backgroundColor: '#E8E7E7', height: '100vh'}}textAlign='center'>
            <Grid.Column style={{maxWidth: 450}}>
               <Header as='h2' textAlign='center'>
                  MAKEUP HUB 
               </Header>
               <Form onSubmit={this.handleSubmit}>
                  <Segment stacked textAlign='left'>
                     Username:
                     <Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange}/>          
                     Password:
                     <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange}/>
                     <Button fluid size='large' type='sumbit'>Log in</Button>
                     
                  </Segment>
               </Form>
            </Grid.Column>
         </Grid>
      )
   }
}

export default Login;