import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';


import Register from './Register';
import Login from './Login' 

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      products: ''
    }
  }

  register = async (data) => {
     try {

      const registerResponse = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json();

      console.log(parsedResponse)

      this.setState({
        ...parsedResponse.data,
        loading: false
      })
      return parsedResponse;

    } catch (err) {
      console.log(err)
    }
  }


  login = async (loginInfo) => {
      try {
         const loginResponse = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: loginInfo,
            headers: {
               'enctype': 'multipart/form-data'
            }
         })

         const parsedResponse = await loginResponse.json();

         if (parsedResponse.status.code === 200) {
            this.setState({
               ...parsedResponse.data,
               loggedIn: true
            })

         }

         return parsedResponse

      } catch (err) {
      console.log(err)
      }
   }   

   uploadProduct = async (data) => {

      try {
      
         const addProductResponse = await fetch('http://localhost:3000/products/upload', {
            method: 'POST',
            credentials: 'include',// on every request we have to send the cookie
            body: data,
            headers: {
               'enctype': 'multipart/form-data'
            }
         })

         const parsedResponse = await addProductResponse.json();

         const newList = this.state.products.slice()

         const newProduct = parsedResponse.data

         newList.push(newProduct)

         this.setState({
            products: newList
         })

         return parsedResponse

      } catch(err){
         console.log(err);
      }
   }

  render () {

    return (
      <div>

      <Register register={this.register}/>
      <Login />
      <Route exact path="/products/upload" render={(props) => <UploadProducts {...props} 
                  uploadProducts={this.uploadProducts}/>} 
               />

      </div>
    )
  }
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       products: ['a','a','a']
//     }
//   }

//   componentDidMount() {
//     this.getData()

//   }

//   getData = async () => {
//     try {
        
//       const vegan = fetch('http://localhost:3000/products/vegan', {
//           credentials: 'include',
//           method: 'GET'
//         });
//       alert(vegan, '%c this is vegan', 'color: blue;')

//       //const json = await vegan.json()
//       this.setState({
//         products: vegan
//       })
//     } catch(err){
//       return err;
//     }
//   }

//   render() {
//     console.log(this.state);
//     const listedProducts = this.state.products.map((product, i) => {
//       return(
//           <div key={i}>
//               {product}
//           </div>
//       )
//     })
    
//     return (
//       <div className="App">
//         <h1>Products</h1>
//         <ul><li>{listedProducts}</li></ul>
        
//       </div>
//     );
//   }
// }

export default App;
