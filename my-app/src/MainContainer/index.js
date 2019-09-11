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

import UploadProduct from '../UploadProduct'

class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      userId: '',
      username: '',
      veganProducts: [],
      drugstoreProducts: [],
      luxuryProducts: [],
      pageShowing: 'home', // 'vegan','luxury','drugstore','product', 'profile', 'edit', 'upload'
      userFavs: [],
      productBeingShown: null,
      // user product being shown
    }
    
  }

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

  showProduct = (id/*, userProductBeingShown*/) => {
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

  uploadProduct = () => {
      this.setState({
          pageShowing: 'upload'
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

    return (

      // pass user product in to show product too
     
      <div style={{backgroundColor: '#ce8ab6' }}>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>Make/Up/Hub</h1>
      <Menu pointing secondary>
          <Menu.Item
              name='home'
              onClick={this.showHome}
          />
          <Menu.Item
              name='profile'
              onClick={this.showProfile}
          />
          <Menu.Item
              name='edit profile'
              onClick={this.editProfile}
          />
          <Menu.Menu position='right'>
            <Menu.Item
                name='logout'
                onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      

      
      {this.state.pageShowing === 'vegan' ? <ShowVegan showProduct={this.showProduct}veganProducts={this.state.veganProducts}/> : null}
      {this.state.pageShowing === 'drugstore' ? <ShowDrugstore showProduct={this.showProduct}drugstoreProducts={this.state.drugstoreProducts}/> : null}
      {this.state.pageShowing === 'luxury' ? <ShowLuxury showProduct={this.showProduct}luxuryProducts={this.state.luxuryProducts}/> : null}
      {this.state.pageShowing === 'product' ? <ShowProduct productBeingShown={this.state.productBeingShown} /> : null}
      {this.state.pageShowing === 'profile' ? <Profile showProduct={this.showProduct}username={this.state.username} userFavs={this.state.userFavs}/> : null}
      {this.state.pageShowing === 'upload' ? <UploadProduct editProfile={this.editProfile} username={this.state.username} /> : null}
      {this.state.pageShowing === 'home' ? 
      <Home 
      
      userFavs={this.state.userFavs} veganProducts={this.state.veganProducts} drugstoreProducts={this.state.drugstoreProducts}luxuryProducts={this.state.luxuryProducts} showVegan={this.showVegan}showDrugstore={this.showDrugstore}showLuxury={this.showLuxury}showProduct={this.showProduct}showHome={this.showHome}
      />  : null}
        
      </div>
      
      )
  }
}

export default MainContainer;



