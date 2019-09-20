import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EditProduct extends Component {
    constructor(){
        super();
        this.state = {
            price: '',
            description: ''
        }
    }

    handleSubmit = async (e) => {
    e.preventDefault();
    const edit = this.props.editProduct(this.state);
    
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    deleteProduct = async (id) => {
      console.log('delete product called');
      try {  

        const productResponse = await fetch('http://localhost:3000/products/' + id, {
          credentials: 'include',
          method: 'GET'
        });
        const resolvedPromise = await productResponse.json()
        

        
      } catch(err){
          console.error(err) ;
      }
    }

    render(){
        return (
            <Grid textAlign='center'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            Edit Price:
                            <Form.Input type='text' name='price' onChange={this.handleChange}/>
                            Edit Description:
                            <Form.Input type='text' name='description' onChange={this.handleChange}/>
                            <Button fluid size='large' type='sumbit'>Submit</Button>
                            <Button onClick={this.deleteProduct} fluid size='large' type='delete'>Delete</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
export default EditProduct;