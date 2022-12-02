import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {localStorage} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component{

    componentDidMount() {
        // debugger
        let userId = this.props.router.params.userId;
        if (userId === 'me'){
            userId = 1;
        }

        axios.get(`http://127.0.0.1:8087/profile/get/${userId}`, localStorage)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile

    }
}
let mapDispatchToProps = {
    setUserProfile
}

let WithUrlProps = withRouter(ProfileContainer)

export default connect(mapStateToProps,mapDispatchToProps)(WithUrlProps);