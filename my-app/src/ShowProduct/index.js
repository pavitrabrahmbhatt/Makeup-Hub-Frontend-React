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
            favorites: []//,
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
                    <Header as='h2' textAlign='center'>
                        {this.state.name}
                    </Header>
                    <h2 style={{display: 'flex', justifyContent: 'center'}}>{this.state.brand}</h2>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img textAlign='center' style={{display: 'flex', justifyContent: 'center'}} height='400' width='400' 
                        src={this.state.imageLink}
                        alt="new"
                    />
                    </div>
                    <h2 style={{display: 'flex', justifyContent: 'center'}}>{this.state.price}</h2>
                    <h2 style={{display: 'flex', justifyContent: 'center'}}>{this.state.description}</h2>
                    <h2 style={{backgroundColor: '#ce8ab6',display: 'flex', justifyContent: 'center'}}>People favorited: {this.state.favorites.length}</h2>

                    
                    <div style={{backgroundColor: '#ce8ab6',display: 'flex', justifyContent: 'center'}}>
                    <button style={{backgroundColor: '#ce8ab6',display: 'flex', justifyContent: 'center'}} onClick={
                        () => { 
                          this.getfavProduct(this.state.productId) 
                        }
                      }
                     className="ui toggle button">Favorite</button>
                     </div>
                </Grid.Column>
            </Grid>
        )
    }
}

export default ShowProduct;



