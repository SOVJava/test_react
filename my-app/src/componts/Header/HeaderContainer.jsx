import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {localStorage} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setProfileAC} from "../../redux/authReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get(`http://127.0.0.1:8087/profile/me`, localStorage)
            .then(response => {
                let {id, fullName, status, contacts} = response.data;
                this.props.setProfileAC(id, fullName, status, contacts)
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Header { ...this.props}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        fullName: state.auth.fullName
    }
}

let mapDispatchToProps = {
    setProfileAC: setProfileAC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);