import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Profile extends Component {
   constructor(){
      super();

      this.state = {
         username: ''
      }
   }

   componentDidMount() {
       
   }

   render(){
      
      // return <h1>Login</h1>
      return (

         <Grid textAlign='center'>
            <Grid.Column style={{maxWidth: 450}}>
               <Form onSubmit={this.handleSubmit}>
               <Segment stacked>
              Edit Username:
              <Form.Input  type='text' name='username' onChange={this.handleChange}/>
              </Segment>
          </Form>
            </Grid.Column>
         </Grid>
      )
   }

}
export default Profile;
