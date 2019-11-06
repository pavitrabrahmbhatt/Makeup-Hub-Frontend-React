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


                    
        <div>    
            <Header style={{'margin-top':'75px',fontFamily: "Nunito",'font-size':'30px'}} as='h2' textAlign='center'>Designed for your needs</Header>
            <Header style={{'margin-top':'25px','margin-bottom':'75px',fontFamily: "Nunito",'font-size':'20px','color':'#8B8D8B'}} as='h4' textAlign='center'>Choose a category below</Header>



            
    <Image.Group size='medium'>
      
   
    
 
            <Image style={{'margin-left':'466px'}} size='medium' src='https://media.giphy.com/media/xUOwGiSIwx6HzCSeIg/giphy.gif' onClick={this.props.showVegan}></Image>
            <Image style={{'margin':'25px'}}size='medium' src='https://media.giphy.com/media/2Ylk0qCKnSULlNY3YA/giphy.gif' onClick={this.props.showDrugstore}></Image>

            <Image style={{'margin-right':'200px'}}size='medium' src='https://media.giphy.com/media/tTutsU63rnHC8/giphy.gif' onClick={this.props.showLuxury}></Image>
             </Image.Group>
        </div>
        );
    }
}


export default Home;






