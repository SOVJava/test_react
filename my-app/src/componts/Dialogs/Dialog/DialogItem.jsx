import React from 'react';
import css from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={css.dialog}>
            <NavLink className={css.linkDialog} to={"/dialogs/" + props.id}>{props.dialogName}</NavLink>
        </div>
    );
}

export default DialogItem;