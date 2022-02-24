import React from "react";
import './SearchItem.scss'
function SearchItem(props){
    return(
        <div className="item-search">{props.children}</div>
    )
}
export default SearchItem;