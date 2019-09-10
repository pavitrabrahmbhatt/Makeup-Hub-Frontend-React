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
            userFavs: []
        }
    }

    componentDidMount() {
      // let id = this.props.productBeingShown
      this.getProduct(this.props.productBeingShown)
      this.setState({
        productId: this.props.productBeingShown
      })
    }

    getfavProduct = async (id) => {
      console.log('get product called');
      try {  

        const productResponse = await fetch('http://localhost:3000/products/fav' + id + '/0', {
          credentials: 'include',
          method: 'GET'
      });
      const resolvedPromise = await productResponse.json()
      
      let newFavs = this.state.userFavs
      newFavs.push(resolvedPromise)
      console.log(newFavs);


       this.setState({
          userFavs: newFavs,
          favorites: newFavs
          // brand:resolvedPromise.brand,
          // name:resolvedPromise.name,
          // price: resolvedPromise.price,
          // imageLink: resolvedPromise.imageLink,
          // description: resolvedPromise.description,
          // productColors:resolvedPromise.productColors
          //fav
      })

       console.log(this.state);
  } catch(err){
      console.error(err) ;
  }
}


  favorite = (productId) => {
    console.log('hitting fav route');
    this.getfavProduct()
  }

    getProduct = async (id) => {
    
        try {  

          const productResponse = await fetch('http://localhost:3000/products/' + id + '/0', {
              credentials: 'include',
              method: 'GET'
        });
        const resolvedPromise = await productResponse.json()

       

        this.setState({
            brand:resolvedPromise.brand,
            name:resolvedPromise.name,
            price: resolvedPromise.price,
            imageLink: resolvedPromise.imageLink,
            description: resolvedPromise.description,
            productColors:resolvedPromise.productColors
            //fav
        })
         
    } catch(err){
      console.error(err) ;
      }
    }

    render(){
        //console.log(this.state.user_id, "HERE IS USER ID ON THE UPLOAD PAGE")
        return (
            <Grid columns={4} padded style={{ height: '100vh'}}>  
                <Grid.Column style={{maxWidth: 400}}>
                    <Header as='h2' textAlign='center'>
                        {this.state.name}
                    </Header>
                    <h2>{this.state.brand}</h2>
                    <img height='100' width='100' 
                        src={this.state.imageLink}
                        alt="new"
                    />
                    <h2>{this.state.price}</h2>
                    <h2>{this.state.description}</h2>
                    <h2>{this.state.favorites.length}</h2>

                    

                    <button onClick={
                        () => { 
                          this.favorite(this.state.productId) 
                        }
                      }
                     className="ui toggle button">Favorite</button>
                </Grid.Column>
            </Grid>
        )
    }
}

export default ShowProduct;



