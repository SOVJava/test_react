import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import MessageItem from "./Message/MessageItem";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map(dialog => <DialogItem dialogName={dialog.dialogName} id={dialog.id}/>)
    let messageElement = props.messageData.map(mess => <MessageItem message={mess.message}/>)

    let changeMessage = (event)=>{
        const value = event.currentTarget.value;
        props.onChangeMessage(value);
    }

    let sendMessage =()=>{
        props.onSendMessage();
    }

    return(
      <div className={css.dialogsGrid}>
          <div className={css.dialogs}>
              <h4>Dialogs</h4>
              {dialogElements}
          </div>
          <div className={css.messages}>
              <h4>Messages</h4>
              {messageElement}
              <div>
                  <div><textarea value={props.newMessageDialog}
                                 onChange={changeMessage}
                                 placeholder='Add new message'/></div>
                  <div><button onClick={sendMessage}>Send</button></div>
              </div>
          </div>
      </div>
    );
}

export default Dialogs;