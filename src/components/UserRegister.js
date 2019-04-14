
import React from 'react';
import { connect } from 'react-redux';
// import { registerUser } from "../actions/userAction";
import  registerUser from "../actions/userAction";

class UserRegister extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleUserNameChange = (e) => {
        console.log("usernamce changed")
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordChange = (e) => {
        console.log("pwd changed")
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.registerUser({
            username: this.state.username,
            password: this.state.password
        })
    }
    render(){
        return (
            <div>
                <form onSubmit= {this.handleSubmit} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" value={this.state.name} onChange={ this.handleUserNameChange }name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange = { this.handlePasswordChange}></input>
                    </div>
                    <div>
                        <button >Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    registerUser
}
export default connect(null, mapDispatchToProps)(UserRegister);



