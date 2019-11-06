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
      console.log(product);
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
        <Header style={{'margin-top':'75px',fontFamily: "Nunito",'font-size':'30px'}} as='h2' textAlign='center'>Vegan Products</Header>
        
        <Header style={{'margin-top':'25px','margin-bottom':'75px',fontFamily: "Nunito",'font-size':'20px','color':'#8B8D8B'}} as='h4' textAlign='center'>Click on an image for more information</Header>

        <Grid columns={5} padded='vertically'textAlign='center' style={{'margin-top': '75px','margin-left':'300px','margin-right':'300px'}}>
         
              <Grid.Row>
                <Grid.Column>
                  <p>{listedVeganProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedVeganProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedVeganProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedVeganProducts}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{listedVeganProducts}</p>
                </Grid.Column>
              </Grid.Row>

            
            </Grid>

      </div>
    );
  }
}


export default ShowVegan;