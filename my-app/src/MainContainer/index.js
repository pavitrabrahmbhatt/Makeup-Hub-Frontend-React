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


class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      userId: '',
      username: '',
      veganProducts: [],
      drugstoreProducts: [],
      luxuryProducts: [],
      pageShowing: 'home', // 'vegan','luxury','drugstore','product', 'profile'
      userFavs: [],
      productBeingShown: null
    }
    
  }
  componentDidMount() {
    
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
      <div>
      <h1>main container hello {this.props.username}</h1>
      <button onClick={this.showHome}>home</button>
      <button onClick={this.showProfile}>profile</button>

      
      {this.state.pageShowing === 'vegan' ? <ShowVegan showProduct={this.showProduct}veganProducts={this.state.veganProducts}/> : null}
      {this.state.pageShowing === 'drugstore' ? <ShowDrugstore showProduct={this.showProduct}drugstoreProducts={this.state.drugstoreProducts}/> : null}
      {this.state.pageShowing === 'luxury' ? <ShowLuxury showProduct={this.showProduct}luxuryProducts={this.state.luxuryProducts}/> : null}
      {this.state.pageShowing === 'product' ? <ShowProduct productBeingShown={this.state.productBeingShown}/> : null}
      {this.state.pageShowing === 'profile' ? <Profile userFavs={this.state.userFavs}/> : null}
      {this.state.pageShowing === 'home' ? 
      <Home 
      
      userFavs={this.state.userFavs} veganProducts={this.state.veganProducts} drugstoreProducts={this.state.drugstoreProducts}luxuryProducts={this.state.luxuryProducts} showVegan={this.showVegan}showDrugstore={this.showDrugstore}showLuxury={this.showLuxury}showProduct={this.showProduct}showHome={this.showHome}
      />  : null}
        
      </div>
      )
  }
}

export default MainContainer;



