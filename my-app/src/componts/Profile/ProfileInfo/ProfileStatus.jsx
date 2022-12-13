import React from 'react';
import css from './ProfileInfo.module.css'

class ProfileStatus extends React.Component{

    render() {
        return (
            <div className={css.profileStatus}>
                <div>
                    <textarea>{this.props.status}</textarea>
                </div>
                <div>
                    <input value={this.props.status}/>
                </div>
            </div>
        )
    }
}

export default ProfileStatus;