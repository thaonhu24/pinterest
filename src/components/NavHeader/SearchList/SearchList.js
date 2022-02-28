import React from "react";
import "./SearchList.scss"
import SearchItem from "../SearchItem/SearchItem";
function SearchList(props){
    const listSearch=props.list;
    return(
        <div className="search-list">
            {
            listSearch.map((item) =>{
                    return <SearchItem>{item.title}</SearchItem>
                }
            )
        }
        </div>
    )
}
export default SearchList;