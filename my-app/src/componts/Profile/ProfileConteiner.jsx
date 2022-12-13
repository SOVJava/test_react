import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileById, setUserProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        let userId = this.props.router.params.userId;
        if (userId === 'me'){
            userId = 1;
        }
        this.props.getProfileById(userId)
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
    getProfileById
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
    withRouter
)(ProfileContainer)


