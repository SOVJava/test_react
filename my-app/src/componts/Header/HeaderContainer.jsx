import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authProfile} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.authProfile()
    }

    render() {
        return (
            <Header { ...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        fullName: state.auth.fullName,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    authProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);