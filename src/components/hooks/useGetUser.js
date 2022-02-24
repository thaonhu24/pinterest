import React, {useEffect,useState} from "react";
import axios from "axios";
function useGetUser(url){
    const [listUser,setListUser]=useState([])
    useEffect(()=>{
        axios.get(url)
        .then(res =>{
            setListUser(res.data)
        })
    },[])
    return(listUser)
}
export default useGetUser;