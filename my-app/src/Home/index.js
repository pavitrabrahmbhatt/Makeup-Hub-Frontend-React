import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';


import Upload from '../UploadProduct'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ShowVegan from '../ShowVegan'
import ShowDrugstore from '../ShowDrugstore'
import ShowLuxury from '../ShowLuxury'
import ShowProduct from '../ShowProduct'


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
    // this.setState({
    // 	veganProducts: this.props.veganProducts
    // })

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


         let only10 = []

         while (only10.length < 10) {
         	only10.push(newList[0])
         }
         console.log(only10);
         // get rand el from newList
         // push into only 10

         this.setState({
            veganProducts: only10
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

      let only10 = []

         while (only10.length < 10) {
         	only10.push(resolvedPromise[only10.length])
         }
         console.log(only10);
         // get rand el from newList
         // push into only 10

         this.setState({
            veganProducts: only10
         })
   //    this.setState({
  	// 	veganProducts: resolvedPromise
	  // })      
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

      let only10 = []

         while (only10.length < 10) {
         	only10.push(resolvedPromise[only10.length])
         }
         console.log(only10);
         // get rand el from newList
         // push into only 10

         this.setState({
            drugstoreProducts: only10
         })
   //    this.setState({
  	// 	drugstoreProducts: resolvedPromise
	  // })      
    } catch(err){
      console.error(err) ;
    }
  }

  

  getData3 = async (data) => {
    try {     
      const luxuryResponse = await fetch('http://localhost:3000/products/luxury', {
	      credentials: 'include',
	      method: 'GET',
	  });
      const resolvedPromise = await luxuryResponse.json()

      console.log(resolvedPromise); // data

      let only10 = []

         while (only10.length < 10) {
         	only10.push(resolvedPromise[only10.length])
         }
         console.log(only10);
         // get rand el from newList
         // push into only 10

         this.setState({
            luxuryProducts: only10
         })
   //    this.setState({
  	// 	luxuryProducts: resolvedPromise
	  // })      
    } catch(err){
      console.error(err) ;
    }
  }

  render() {
    const listedVeganProducts = this.state.veganProducts.map((product, i) => {
      // console.log(product);
      return(
          <div key={i}>
          <img onClick={
                  () => { 
                    this.props.showProduct(product.productId) 
                  }
                }
                height='60' width='60' 
                src={product.imageLink}
                alt={product.name}
              />
              
              
            
          </div>
      )
    })

    const listedDrugstoreProducts = this.state.drugstoreProducts.map((product, i) => {
      return(
          <div key={i}>
              <img height='20' width='20' 
                src={product.imageLink}
                alt="new"
              />
              
              <button 
                onClick={
                  () => { 
                    this.props.showProduct(product.productId) 
                  }
                }
              >{product.name}</button>
          </div>
      )
    })

    const listedLuxuryProducts = this.state.luxuryProducts.map((product, i) => {
      return(
          <div key={i}>
          <img height='20' width='20' 
                src={product.imageLink}
                alt="new"
              />
              {product.brand}
              <button 
                onClick={
                  () => { 
                    this.props.showProduct(product.productId) 
                  }
                }
              >{product.name}</button>
          </div>
      )
    })
    
    return (
      <div className="App">
        <h1>Vegan Products</h1>
        <ul>{listedVeganProducts}</ul>
        <button onClick={this.props.showVegan}>See all</button>

        <h1>Drugstore Products</h1>
        <ul>{listedDrugstoreProducts}</ul>
        <button onClick={this.props.showDrugstore}>See all</button>

        <h1>Luxury Products</h1>
        <ul>{listedLuxuryProducts}</ul>
        <button onClick={this.props.showLuxury}>See all</button>

        <Upload uploadProduct={this.uploadProduct} products={this.state.products}/>
      </div>
    );
  }
}


export default Home;






