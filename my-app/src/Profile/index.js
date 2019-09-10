import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Profile extends Component {
   constructor(){
      super();

      this.state = {
         username: '',
         userFavs: []
      }
   }

   componentDidMount() {
      this.getUser()
      this.setState({
         userFavs: this.props.userFavs
      }) 
   }

   getUser = async (id) => {
    
      try {  

         const userResponse = await fetch('http://localhost:3000/auth', {
            credentials: 'include',
            method: 'GET'
         });
         const resolvedPromise = await userResponse.json()
         console.log("here is the user");
         console.log(resolvedPromise);

         this.setState({
            username: resolvedPromise.data.username
            //fav
      })
         
    } catch(err){
      console.error(err) ;
      }
    }

   render(){
      console.log(this.props.userFavs);
      // return <h1>Login</h1>
      return (

         <Grid textAlign='center'>
            <Grid.Column style={{maxWidth: 450}}>
               <Header as='h2' textAlign='center'>
                  Your Profile Page
               </Header>
                  <h3>{this.state.username}</h3>
                  <button >edit profile</button>
               <h3>{this.state.username}'s Favorites</h3>
            </Grid.Column>
         </Grid>
      )
   }

}
export default Profile;




