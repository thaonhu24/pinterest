import React from 'react'
import './Detail.scss'
import {useParams,Link} from "react-router-dom"

function Detail(props){
   
    const {detailId} = useParams()
    const image = props.listImg.find(img => img.id === detailId)
    console.log(image)
    return (
        <div className='detail-img'>
            <Link to="/">
                <button>Home</button>
            </Link>
            <img src={image.download_url} />
        </div>
    )
     
    
}
export default Detail