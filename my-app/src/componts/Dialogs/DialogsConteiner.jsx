import React from 'react';
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messageData: state.messagePage.messageData,
        newMessageDialog: state.messagePage.newMessageDialog
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (value) => {
            let action = updateNewMessageCreator(value);
            dispatch(action)
        },
        onSendMessage: () => {
            let action = addMessageCreator();
            dispatch(action);
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

