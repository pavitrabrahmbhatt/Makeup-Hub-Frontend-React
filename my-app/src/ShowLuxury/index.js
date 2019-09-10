import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';


import Upload from '../UploadProduct'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class ShowLuxury extends Component {
  constructor(){
    super();
    this.state = {
      
      luxuryProducts:[]
    }
  }

  componentDidMount() {
   
    this.getData3() // luxury
    

  }

  

  

  getData3 = async (data) => {
    try {     
      const luxuryResponse = await fetch('http://localhost:3000/products/luxury', {
	      credentials: 'include',
	      method: 'GET',
	  });
      const resolvedPromise = await luxuryResponse.json()

      console.log(resolvedPromise); // data

     
      this.setState({
  		luxuryProducts: resolvedPromise
	  })      
    } catch(err){
      console.error(err) ;
    }
  }

  render() {
    

    const listedLuxuryProducts = this.state.luxuryProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.brand}
              <button onClick={this.props.showProduct}>{product.name}</button>
          </div>
      )
    })
    
    return (
      <div className="App">


        <h1>Luxury Products</h1>
        <ul>{listedLuxuryProducts}</ul>
        

       
      </div>
    );
  }
}


export default ShowLuxury;
