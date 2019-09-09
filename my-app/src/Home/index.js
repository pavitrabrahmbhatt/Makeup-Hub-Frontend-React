import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';


import Upload from '../UploadProduct'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
class Home extends Component {
  constructor(){
    super();
    this.state = {
      veganProducts: [],
      drugstoreProducts: [],
      luxuryProducts:[]
    }
  }

  componentDidMount() {
    this.getData() // vegan
    this.getData2() // drugstore
    this.getData3() // luxury
    this.setState({
    	veganProducts: this.props.veganProducts
    })

  }

  uploadProduct = async (data) => {

      try {
        
         const addProductResponse = await fetch('http://localhost:3000/products/upload', {
            method: 'POST',
            credentials: 'include',// on every request we have to send the cookie
            body: JSON.stringify(data),
            headers: {
               'Content-Type': 'application/json'
            }
         })

         const parsedResponse = await addProductResponse.json();

         const newList = this.state.veganProducts

         const newProduct = parsedResponse.data

         newList.push(newProduct)


         const only10 = []

         // while only10 < 10 elements
         // get rand el from newList
         // push into only 10

         this.setState({
            veganProducts: newList
         })

      } catch(err){
         console.log(err);
      }
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


  getData2 = async (data) => {
    try {     
      const drugstoreResponse = await fetch('http://localhost:3000/products/drugstore', {
	      credentials: 'include',
	      method: 'GET'
	  });
      const resolvedPromise = await drugstoreResponse.json()
      console.log(resolvedPromise); // data
      this.setState({
  		drugstoreProducts: resolvedPromise
	  })      
    } catch(err){
      console.error(err) ;
    }
  }

  showProduct = () => {
  		
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
    const listedVeganProducts = this.state.veganProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.brand}
              <button onClick={this.showProduct}>{product.name}</button>
          </div>
      )
    })

    const listedDrugstoreProducts = this.state.drugstoreProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.imageLink}
              <button>{product.name}</button>
          </div>
      )
    })

    const listedLuxuryProducts = this.state.luxuryProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.brand}
              {product.name}
          </div>
      )
    })
    
    return (
      <div className="App">
        <h1>Vegan Products</h1>
        <ul>{listedVeganProducts}</ul>

        <h1>Drugstore Products</h1>
        <ul>{listedDrugstoreProducts}</ul>

        <h1>Luxury Products</h1>
        <ul>{listedLuxuryProducts}</ul>

        <Upload uploadProduct={this.uploadProduct} products={this.state.products}/>
        
      </div>
    );
  }
}


export default Home;






