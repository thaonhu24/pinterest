import React from "react"
import { Router, Route, Link, NavLink , Routes} from "react-router-dom";
import './ImageItem.scss'
import SaveButton from '../../SaveButton/SaveButton'
import Detail from "../../../layout/Detail";

function Image(props) {

    return (
        
        
            <div className="img-card">
                <SaveButton></SaveButton>
                <img key={props.id} src={props.src} alt="" />
            </div> 
            
                
       
    )
}
export default Image