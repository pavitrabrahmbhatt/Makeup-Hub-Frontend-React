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
    this.getData2() // drugstore
  }

  getData2 = async (data) => {
    try {     
      const drugstoreResponse = await fetch('http://localhost:3000/products/drugstore', {
	      credentials: 'include',
	      method: 'GET'
	  });
      const resolvedPromise = await drugstoreResponse.json()
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
            <img onClick={
                    () => { 
                      this.props.showProduct(product.productId) 
                    }
                  }
                  height='220' width='220' 
                  src={product.imageLink}
                  alt={product.name}
                />
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






