import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';


import Upload from '../UploadProduct'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
class ShowVegan extends Component {
  constructor(){
    super();
    this.state = {
      veganProducts: []
     
    }
  }

  componentDidMount() {
    this.getData() // vegan
  
  }


  getData = async (data) => {
    try {  
      const veganResponse = await fetch('http://localhost:3000/products/vegan', {
	      credentials: 'include',
	      method: 'GET'
	  });
      const resolvedPromise = await veganResponse.json()

      
      this.setState({
  		veganProducts: resolvedPromise
	  })      
    } catch(err){
      console.error(err) ;
    }
  }



  render() {
    const listedVeganProducts = this.state.veganProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.brand}
              <button onClick={this.showProduct}>{product.name}</button>
          </div>
      )
    })

    
    
    return (
      <div className="App">
        <h1>Vegan Products</h1>
        <ul>{listedVeganProducts}</ul>
        <button onClick={this.showVegan}>See all</button>

      </div>
    );
  }
}


export default ShowVegan;