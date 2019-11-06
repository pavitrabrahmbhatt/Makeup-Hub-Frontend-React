import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Profile extends Component {
   constructor(){
      super();

      this.state = {
         username: '',
         userFavs: [],
         pageShowing: 'profile' // 'edit'
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
            username: resolvedPromise.data.username,
            userFavs: resolvedPromise.data.favorites
      })
         
    } catch(err){
      console.error(err) ;
      }
    }

     

   render(){
      const listedProducts = this.state.userFavs.map((product, i) => {
            return(
                <div key={i}>
                <Image
                  onClick={
                    () => { 
                      this.props.showProduct(product.productId) 
                    }
                  }
                    
                    src={this.state.userFavs[i].imageLink}
                    alt='img'
                    size='medium' circular bordered
                />
                    
                </div>
            )
        })
      console.log(this.state.userFavs);
      // return <h1>Login</h1>
      return (

        <div>






    <Header as='h2' textAlign='center' style={{'margin-top':'75px',fontFamily: "Nunito",'font-size':'30px'}}>
                      Welcome back, {this.state.username.toUpperCase()}!
                   </Header>
                   <Header style={{'margin-top':'25px','margin-bottom':'75px',fontFamily: "Nunito",'font-size':'20px','color':'#8B8D8B'}} as='h4' textAlign='center'>View your favorites below</Header>
         <Grid columns={5} padded='vertically'textAlign='center' style={{'margin-top': '75px','margin-left':'300px','margin-right':'300px'}}>
         
              <Grid.Row>
                <Grid.Column>
                  <p>{listedProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedProducts}</p>
                </Grid.Column>
              </Grid.Row>

            
            </Grid>

</div>



      )

   }

}
export default Profile;




