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
        
    }

    uploadProduct = async (data) => { console.log("uplaodproduct");

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

        let only10 = []

            while (only10.length < 10) {
                only10.push(resolvedPromise[only10.length])
            }
          
            this.setState({
                veganProducts: only10
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

          let only10 = []

          while (only10.length < 10) {
          	  only10.push(resolvedPromise[only10.length])
          }
          
          this.setState({
              drugstoreProducts: only10
          })

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

          while (only10.length < 9) {
          	  only10.push(resolvedPromise[only10.length])
          }

          this.setState({
              luxuryProducts: only10
          })
              
      } catch(err){
          console.error(err) ;
      }
    }

    render() {
        
      
        return (    
                        
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <h2 style={{fontFamily: "Nunito"}}onClick={this.props.showVegan}>HOME PAGE</h2>
                        
                        
                    </Grid.Column>
                    
                </Grid.Row>   
</Grid> 
                
            
            
        );
    }
}


export default Home;






