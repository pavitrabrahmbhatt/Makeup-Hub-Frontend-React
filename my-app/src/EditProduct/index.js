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

    render(){
        return (
            <Grid textAlign='center'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            Edit Price:
                            <Form.Input type='text' name='price'/>
                            Edit Description:
                            <Form.Input type='text' name='description'/>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
export default EditProduct;