import React, {useEffect,useState} from "react";
import CardImage from "./CardImage";
import useGetUser from "./hooks/useGetUser";
import ImageApi from "../api/imageApi";
function ListImage(){
    const [listImg,setListImg]=useState([])
    useEffect(()=>{
        const fetchListImage=async () =>{
            try {
                const params={
                   
                };
                const response = await ImageApi.getAll(params)
                setListImg(response)
                console.log(response)
                
            } catch(error){
                console.log('fail..',error)
            }
        }
        fetchListImage();
    },[])
    return(
        <div className="list-img">
            {listImg.map((item)=>{
                return <CardImage src={item.download_url}></CardImage>
            }
            )}
        </div>
    )
}
export default ListImage;