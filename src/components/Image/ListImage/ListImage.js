import React from "react";
import CardImage from "../CardImage/CardImage";

import {BrowserRouter as Router, Route, Link} from "react-router-dom"
function ListImage(props){
    return(
            <div className="list-img">
                {props.listImage.map((item)=>(
                <Link to={`/detail/${item.id}`}>
                    <CardImage key={item.id} src={item.download_url}></CardImage>
                </Link>))}
            </div>
    )
}
export default ListImage;