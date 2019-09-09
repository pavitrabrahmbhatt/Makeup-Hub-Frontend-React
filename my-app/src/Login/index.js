import React, { Component } from 'react';
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

      const data = new FormData();
      data.append('username', this.state.username);
      data.append('password', this.state.password);

      const loginResponse = await this.props.login(data);

      //this.props.history.push('/home')

      return loginResponse;

   }

   render(){

      return (

         <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
            <Grid.Column style={{maxWidth: 450}}>
               <Header as='h2' textAlign='center'>
                  Log in
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