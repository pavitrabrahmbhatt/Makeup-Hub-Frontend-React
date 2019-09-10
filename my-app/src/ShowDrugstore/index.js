import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';


import Upload from '../UploadProduct'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class ShowDrugstore extends Component {
  constructor(){
    super();
    this.state = {
    
      drugstoreProducts: []
    }
  }

  componentDidMount() {
    //this.getData() // vegan
    this.getData2() // drugstore
    //this.getData3() // luxury
    // this.setState({
    // 	veganProducts: this.props.veganProducts
    // })

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


 

  render() {
   

    const listedDrugstoreProducts = this.state.drugstoreProducts.map((product, i) => {
      return(
          <div key={i}>
              {product.imageLink}
              <button onClick={this.props.showProduct}>{product.name}</button>
          </div>
      )
    })

  
    
    return (
      <div className="App">
        

        <h1>Drugstore Products</h1>
        <ul>{listedDrugstoreProducts}</ul>
        

      </div>
    );
  }
}


export default ShowDrugstore;






