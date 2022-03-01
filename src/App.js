import React from "react";
import { BrowserRouter as Switch, Route, Router, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Detail from "./layout/Detail";
import ImageApi from "./api/imageApi"
import {useEffect, useState} from "react"
function App(){
    const [listImg,setListImg]=useState([])
        useEffect(()=>{
            const fetchListImage=async () =>{
                try {
                    
                    const response = await ImageApi.getAll()
                    setListImg(response)        
                } catch(error){
                    console.log('fail..',error)
                }
            }
            fetchListImage();
        },[])
    return (
        <Routes>
            <Route path="/" element={<Home listImg={listImg}/>} exact/>
            <Route path="/detail/:detailId" element={<Detail listImg={listImg}/>} />
        </Routes>
        
        
    )
}
export default App;