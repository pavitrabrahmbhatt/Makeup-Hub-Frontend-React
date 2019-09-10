import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


import Home from '../Home'
import ShowVegan from '../ShowVegan'
import ShowDrugstore from '../ShowDrugstore'
import ShowLuxury from '../ShowLuxury'
import ShowProduct from '../ShowProduct'
import Profile from '../Profile'
import EditProfile from '../EditProfile'


class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      userId: '',
      username: '',
      veganProducts: [],
      drugstoreProducts: [],
      luxuryProducts: [],
      pageShowing: 'home', // 'vegan','luxury','drugstore','product', 'profile', 'edit'
      userFavs: [],
      productBeingShown: null
    }
    
  }

  // getUser = async (id) => {
    
  //     try {  

  //        const userResponse = await fetch('http://localhost:3000/auth', {
  //           credentials: 'include',
  //           method: 'GET'
  //        });
  //        const resolvedPromise = await userResponse.json()
  //        console.log("here is the user");
  //        console.log(resolvedPromise);

  //        this.setState({
  //           username: resolvedPromise.data.username,
  //           userFavs: resolvedPromise.data.favorites
  //     })
         
  //   } catch(err){
  //     console.error(err) ;
  //     }
  //   }

  componentDidMount() {
      this.setState({
        username: this.props.username
      })
  }

  showVegan = () => {
      this.setState({
        pageShowing: 'vegan'
      })
  }

   showDrugstore = () => {
      this.setState({
        pageShowing: 'drugstore'
      })
  } 

   showLuxury = () => {
      this.setState({
        pageShowing: 'luxury'
      })
  }     

  showProduct = (id) => {
      this.setState({
        pageShowing: 'product',
        productBeingShown: id
      })
  }   

  editProfile = () => {
      this.setState({
        pageShowing: 'edit'
      })
  }    


  showHome = (pg) => {
      // change the value in state of what page is show
      this.setState({
        pageShowing: 'home'
      })
  }   


  showProfile = (pg) => {
      // change the value in state of what page is show
      this.setState({
        pageShowing: 'profile'
      })
  } 

     
      
  render(){
    console.log('this.state.productBeingShown in main container')
    console.log(this.state.productBeingShown);
    //console.log(this.props);

    return (
     
      <div style={{backgroundColor: '#b47978' }}>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>Make/Up/Hub Hello, {this.state.username}</h1>
      <Button onClick={this.showHome}>home</Button>
      <Button onClick={this.showProfile}>profile</Button>
      <Button onClick={this.editProfile}>edit profile</Button>

      
      {this.state.pageShowing === 'vegan' ? <ShowVegan showProduct={this.showProduct}veganProducts={this.state.veganProducts}/> : null}
      {this.state.pageShowing === 'drugstore' ? <ShowDrugstore showProduct={this.showProduct}drugstoreProducts={this.state.drugstoreProducts}/> : null}
      {this.state.pageShowing === 'luxury' ? <ShowLuxury showProduct={this.showProduct}luxuryProducts={this.state.luxuryProducts}/> : null}
      {this.state.pageShowing === 'product' ? <ShowProduct productBeingShown={this.state.productBeingShown}/> : null}
      {this.state.pageShowing === 'profile' ? <Profile showProduct={this.showProduct}username={this.state.username} userFavs={this.state.userFavs}/> : null}
      {this.state.pageShowing === 'edit' ? <EditProfile editProfile={this.editProfile} username={this.state.username} /> : null}
      {this.state.pageShowing === 'home' ? 
      <Home 
      
      userFavs={this.state.userFavs} veganProducts={this.state.veganProducts} drugstoreProducts={this.state.drugstoreProducts}luxuryProducts={this.state.luxuryProducts} showVegan={this.showVegan}showDrugstore={this.showDrugstore}showLuxury={this.showLuxury}showProduct={this.showProduct}showHome={this.showHome}
      />  : null}
        
      </div>
      
      )
  }
}

export default MainContainer;



