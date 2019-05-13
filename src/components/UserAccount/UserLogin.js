import React from "react";
import {Router, browserHistory} from 'react-router';
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import { authAction } from "../../actions/authAction";
import { userAccountConstant } from "../../constants/userAccount.constant";


class UserLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            logging: false,
            loggedIn: false,
            loginError: "",
            loggedInUser: "",
            submitted: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({submitted:true});
        this.props.logging();
        this.props.login({
            username: this.state.username,
            password: this.state.password
        })
        const { history } = this.props;
        history.push('/');
    }
    handleCancel = () => {
        this.setstate = ({
            username: "",
            password: ""
        })
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { loggingIn, userLoggedIn, loggedInUser} = this.props;
        const { submitted, username, password } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                        
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" value={ password } onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div>
                        <button>Submit</button>
                        <button onClick={this.handleChange}>Cancel</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                    {loggingIn ? <div className=""> Logging In </div> : null }
                    { userLoggedIn ? <div>You have successfully logged in. Welcome { loggedInUser }</div>: null }
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ...state,
        userLoggedIn: state.authReducer.userLoggedIn,
        loggedInUser: state.authReducer.loggedInUser,
        loggingIn: state.authReducer.loggingIn

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userParams) => {
            dispatch(authAction.login(userParams))
        },
        logging: () => {
            dispatch({
                type: userAccountConstant.USER_LOGIN_REQUEST
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);