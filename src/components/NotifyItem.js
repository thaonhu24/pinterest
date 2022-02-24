import React from "react";
import './NotifyItem.scss'
function NotifyItem(props){
    return(
        <div className="notify-item">
            <p>{props.children}</p>
        </div>
    )
}
export default NotifyItem;