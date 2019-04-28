import React from 'react';
import { connect } from 'react-redux';
import { userAction } from "../../actions/userAction";

class UserRegister extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            userRegisterSuccess: "",
            userRegisterError: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.registerUser({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button >Register</button>
                    </div>
                    <div>
                        {this.state.userRegisterSuccess ? <h1>user creation success </h1> : <span>error</span>}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userRegisterSuccess: state.userRegisterSuccess,
        userRegisterError: state.userRegisterError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (userParams) => {
            dispatch(userAction.registerUser(userParams))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);



