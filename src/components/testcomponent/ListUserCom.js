import React,{useEffect, useState} from "react";
import useGetUser from "../hooks/useGetUser";
function ListUserCom(){
    const listUser=useGetUser('https://reqres.in/api/users?page=2')
    return (
        <div>
                <div className="list-user-container">
                {
                    listUser.map((item,index) => (
                        <div className="child">
                            <img src={item.avatar} alt="" />
                            
                        </div>
                        )
                    )
                }
                </div>
            </div>
    )
}
export default ListUserCom