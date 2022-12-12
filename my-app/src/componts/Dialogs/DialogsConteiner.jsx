import React from 'react';
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const DialogsContainer = () => {

    return (<div></div>
        // <StoreContext.Consumer>{
        //     (store) => {
        //         let state = store.getState().messagePage;
        //
        //         let changeMessage = (value) => {
        //             let action = updateNewMessageCreator(value);
        //             store.dispatch(action);
        //         };
        //
        //         let sendMessage = () => {
        //             let action = addMessageCreator();
        //             store.dispatch(action);
        //         };
        //
        //         return <Dialogs dialogsData={state.dialogsData}
        //                         messageData={state.messageData}
        //                         newMessageDialog={state.newMessageDialog}
        //                         onChangeMessage={changeMessage}
        //                         onSendMessage={sendMessage}/>
        //     }
        // }</StoreContext.Consumer>
    );
}

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

let withAuthRedirectLogin = withAuthRedirect(Dialogs)

export let SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectLogin)

export default DialogsContainer;