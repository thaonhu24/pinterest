import React from "react";
import Image from "../../Image/ImageItem/ImageItem";
import UserInfor from "../../UserInfor/UserInfor";
import './CardImage.scss'
function CardImage(props){
    return(
        <div className="card-item">
            <Image src = {props.src}/>
            <UserInfor></UserInfor>
        </div>
    )
}
export default CardImage;