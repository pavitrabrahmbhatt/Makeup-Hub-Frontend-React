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
      userFavs: []
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

  showProduct = () => {
      this.setState({
        pageShowing: 'product'
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


  favorite = (product) => {
      let newFavs = this.state.userFavs
      newFavs.push(product)
      this.setState({
        userFavs: newFavs
      })
  }    
  


  
  render(){
    //console.log('this.state in main container')
    //console.log(this.state);
    //console.log(this.props);

    return (
      <div>
      <h1>main container hello {this.props.username}</h1>
      <button onClick={this.showHome}>home</button>
      <button onClick={this.showProfile}>profile</button>
      
      {this.state.pageShowing === 'vegan' ? <ShowVegan veganProducts={this.state.veganProducts}/> : null}
      {this.state.pageShowing === 'drugstore' ? <ShowDrugstore drugstoreProducts={this.state.drugstoreProducts}/> : null}
      {this.state.pageShowing === 'luxury' ? <ShowLuxury luxuryProducts={this.state.luxuryProducts}/> : null}
      {this.state.pageShowing === 'product' ? <ShowProduct /> : null}
      {this.state.pageShowing === 'profile' ? <Profile userFavs={this.state.userFavs}/> : null}
      {this.state.pageShowing === 'home' ? <Home favorite={this.favorite}userFavs={this.state.userFavs} veganProducts={this.state.veganProducts}drugstoreProducts={this.state.drugstoreProducts}luxuryProducts={this.state.luxuryProducts} showVegan={this.showVegan}showDrugstore={this.showDrugstore}showLuxury={this.showLuxury}/>  : null}
        
      </div>
      )
  }
}

export default MainContainer;



