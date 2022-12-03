import React from 'react';
import Header from "./Header";
import axios from "axios";
import {localStorage} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setProfileAC} from "../../redux/authReducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component{

    componentDidMount() {
        usersAPI.myProfile()
            .then(response => {
                let {id, fullName, status, contacts} = response.data;
                this.props.setProfileAC(id, fullName, status, contacts)
            })
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