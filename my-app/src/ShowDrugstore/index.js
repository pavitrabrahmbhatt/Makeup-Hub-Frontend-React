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
            <Image onClick={
                    () => { 
                      this.props.showProduct(product.productId) 
                    }
                  }
                  size='medium' circular bordered
                  src={product.imageLink}
                  alt={product.name}
                />
            </div>
        )
      })

    return (
      <div className="App">
        <Header style={{'margin-top':'75px',fontFamily: "Nunito",'font-size':'30px'}} as='h2' textAlign='center'>Drugstore Products</Header>
        <Header style={{'margin-top':'25px','margin-bottom':'75px',fontFamily: "Nunito",'font-size':'20px','color':'#8B8D8B'}} as='h4' textAlign='center'>Click on an image for more information</Header>
        <Grid columns={5} padded='vertically'textAlign='center' style={{'margin-top': '75px','margin-left':'300px','margin-right':'300px'}}>
        <Grid.Row>
                <Grid.Column>
                  <p>{listedDrugstoreProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedDrugstoreProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedDrugstoreProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedDrugstoreProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedDrugstoreProducts}</p>
                </Grid.Column>
              </Grid.Row>

            
            </Grid>
      </div>
    );
  }
}


export default ShowDrugstore;






