import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends React.Component {
    render() {
        console.log("is authenticated in Home page", this.props.userLoggedIn)
        const isAuthenticated = this.props.userLoggedIn

        return (
            <div>
                { isAuthenticated ? <div> Welcome</div> : <div> Please Login</div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        userLoggedIn: state.authReducer.userLoggedIn
    }
}




export default connect(mapStateToProps, null)(Home);

// }
{/* <div className="home">
            <h4 className= "center">Home</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque quos. Cupiditate accusantium reiciendis ad ea! Doloribus, nisi possimus! Provident tempore amet architecto blanditiis eius corrupti unde non eaque dolorem?</p>
        </div> */}