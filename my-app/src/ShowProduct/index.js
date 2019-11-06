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
            userId: '',
            favorites: [],
            pageBeingShown: 'product' // 'edit', 'delete'
            // userFavs: []
        }
    }

    componentDidMount() {
      // let id = this.props.productBeingShown

      // if there's a value in props.userproduct...., get user product
      
      // else 
        this.getProduct(this.props.productBeingShown)
        this.setState({
          productId: this.props.productBeingShown
        })
    }

    getfavProduct = async (id) => {
      console.log('get product called');
      try {  

        const productResponse = await fetch('http://localhost:3000/products/fav/' + id + '/0', {
          credentials: 'include',
          method: 'GET'
        });
        const resolvedPromise = await productResponse.json()
        
        // let newFavs = this.state.userFavs
        // newFavs.push(resolvedPromise)
        // console.log(newFavs);


       this.setState({
          favorites: resolvedPromise.product.favorites
        })

        
      } catch(err){
          console.error(err) ;
      }
    }


    getUserProduct = (id) => {
        
    }    

    getProduct = async (id) => {
    
      try {  

        const productResponse = await fetch('http://localhost:3000/products/' + id + '/0', {
            credentials: 'include',
              method: 'GET'
        });
        const resolvedPromise = await productResponse.json()
        console.log("here's product info");
        console.log(resolvedPromise);
        this.setState({
          brand:resolvedPromise.brand,
          name:resolvedPromise.name,
          price: resolvedPromise.price,
          imageLink: resolvedPromise.imageLink,
          description: resolvedPromise.description,
          productColors:resolvedPromise.productColors,
          favorites: resolvedPromise.favorites
        })
         
      } catch(err){
        console.error(err) ;
      }
    }

    render(){
        console.log("this.state in ShowProduct")
        console.log(this.state);
        //console.log(this.state.user_id, "HERE IS USER ID ON THE UPLOAD PAGE")
        return (
            <Grid textAlign='center' columns={1} style={{display: 'flex', justifyContent: 'center'}} padded style={{ height: '100vh'}}>  
                <Grid.Column style={{maxWidth: 1500}}>
                    <Header style={{'margin-top':'75px',fontFamily: "Nunito",'font-size':'30px'}} as='h2' textAlign='center'>
                        {this.state.name} {this.state.brand}
                    </Header>

                    <h2 style={{display: 'flex', justifyContent: 'left', fontFamily: "Nunito"}}> </h2>



                    <div style={{display: 'flex', justifyContent: 'left'}}>
                        
                        <img textAlign='left' style={{'margin-top': '50px',display: 'flex', justifyContent: 'center'}} height='400' width='400' 
                            src={this.state.imageLink}
                            alt="new"
                        />

                        <ul style={{'margin-top': '50px','list-style': 'none', fontFamily: "Nunito"}}>
                            <li><h2 style={{'margin-left': '100px', display: 'flex', justifyContent: 'left', fontFamily: "Nunito"}}>Price: ${this.state.price}</h2></li>                  
                            <li><p style={{ 'text-align':'left','margin-top':'20px','margin-left': '100px', fontFamily: "Nunito"}}>Description: {this.state.description}</p></li>


                            


                            <li><button style={{ fontWeight: 'bold','margin-top':'140px','margin-left': '100px',display: 'flex', justifyContent: 'center', fontFamily: "Nunito", fontSize: '25px'}} onClick={
                                () => { 
                                    this.getfavProduct(this.state.productId) 
                                }
                            }
                            className="ui toggle button">Favorite</button></li>

                            <li><p style={{'margin-top':'12px','margin-left': '100px', display: 'flex', justifyContent: 'left', fontFamily: "Nunito"}}>Liked by {this.state.favorites.length} users</p></li>
                        </ul>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}

export default ShowProduct;



