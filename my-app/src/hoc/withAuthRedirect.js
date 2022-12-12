import React from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class withAuthRedirectClass extends React.Component {
        render() {
            if (!this.props.isAuth)
                return <Navigate to={'/login'}/>
            return <Component {...this.props}/>

        }
    }

    let ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(withAuthRedirectClass)

    return ConnectRedirectComponent;

}

