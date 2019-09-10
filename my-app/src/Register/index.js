import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { Link, BrowserRouter } from 'react-router-dom';
import Login from '../Login'

class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.register(this.state);
    }


    render(){
        console.log("register");
        // return <h1>Register</h1>
        return (
            <Grid textAlign='center'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center'>
                      Register
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            Username:
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange}/>
                            password:
                            <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange}/>
                            <Button fluid size='large' type='sumbit'>Register</Button>
                      </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;