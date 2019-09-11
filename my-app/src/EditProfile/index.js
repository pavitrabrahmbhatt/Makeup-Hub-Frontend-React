import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EditProfile extends Component {
    constructor(){
        super();
        this.state = {
            username: ''
        }
    }

    render(){
        return (
            <Grid textAlign='center'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            Edit Username:
                            <Form.Input type='text' name='username'/>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
export default EditProfile;
