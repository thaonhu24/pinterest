import React, {useEffect,useState} from "react";
import CardImage from "../CardImage/CardImage";
import ImageApi from "../../../api/imageApi";

import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
function ListImage(props){
    // const [listImg,setListImg]=useState([])
    // useEffect(()=>{
    //     const fetchListImage=async () =>{
    //         try {
                
    //             const response = await ImageApi.getAll()
    //             setListImg(response)        
    //         } catch(error){
    //             console.log('fail..',error)
    //         }
    //     }
    //     fetchListImage();
    // },[])
    // const image =(item)=><CardImage src={item.download_url}></CardImage>
    // console.log(DataImage)
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