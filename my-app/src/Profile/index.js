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

   


   render(){
      // return <h1>Login</h1>
      return (

         <Grid textAlign='center'>
            <Grid.Column style={{maxWidth: 450}}>
               <Header as='h2' textAlign='center'>
                  Profile Page
               </Header>
                  <p>Username</p>
                  <p>edit profile</p>
               <h3>Favorites</h3>
            </Grid.Column>
         </Grid>
      )
   }

}
export default Profile;




