import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        //This will be where we submit to database
        console.log(user);
        axios.post('http://localhost:5000/users/add', user).then(res => console.log(res.data)); 

        this.setState({ username: '' })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};