import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';

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
    this.getData()
    this.getData2()
    //this.getData3()
    this.setState({
    	veganProducts: this.props.veganProducts
    })

  }

  getData = async (data) => {
    try {  
      const veganResponse = await fetch('http://localhost:3000/products/vegan', {
	      credentials: 'include',
	      method: 'GET',
	      body: JSON.stringify(data),
	      headers: {
	         'Content-Type': 'application/json'
	      }
	  });
      const resolvedPromise = await veganResponse.json()
      this.setState({
  		veganProducts: resolvedPromise
	  })      
    } catch(err){
      return err;
    }
  }


  getData2 = async (data) => {
    try {     
      const drugstoreResponse = await fetch('http://localhost:3000/products/drugstore', {
	      credentials: 'include',
	      method: 'GET',
	      body: JSON.stringify(data),
	      headers: {
	         'Content-Type': 'application/json'
	      }
	  });
      const resolvedPromise = await drugstoreResponse.json()
      console.log(resolvedPromise); // data
      this.setState({
  		drugstoreProducts: resolvedPromise
	  })      
    } catch(err){
      return err;
    }
  }

  // getData3 = async (data) => {
  //   try {     
  //     const luxuryResponse = await fetch('http://localhost:3000/products/luxury', {
	 //      credentials: 'include',
	 //      method: 'GET',
	 //      body: JSON.stringify(data),
	 //      headers: {
	 //         'Content-Type': 'application/json'
	 //      }
	 //  });
  //     const resolvedPromise = await luxuryResponse.json()

  //     console.log(resolvedPromise); // data
  //     this.setState({
  // 		luxuryProducts: resolvedPromise
	 //  })      
  //   } catch(err){
  //     return err;
  //   }
  // }

  render() {
    const listedVeganProducts = this.state.veganProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.brand}
              {product.name}
          </div>
      )
    })

    const listedDrugstoreProducts = this.state.drugstoreProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.brand}
              {product.name}
          </div>
      )
    })

    // const listedLuxuryProducts = this.state.luxuryProducts.map((product, i) => {
    //   return(
    //       <div key={i}>
    //           {product.brand}
    //           {product.name}
    //       </div>
    //   )
    // })
    
    return (
      <div className="App">
        <h1>Vegan Products</h1>
        <ul>{listedVeganProducts}</ul>

        <h1>Drugstore Products</h1>
        <ul>{listedDrugstoreProducts}</ul>

        
        
      </div>
    );
  }
}


export default Home;






