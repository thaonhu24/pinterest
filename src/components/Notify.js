import React from "react";
import NotifyItem from "./NotifyItem";
import useGetUser from "./hooks/useGetUser";
import './Notify.scss'
function Notify(props){
    const listTodo=useGetUser('https://jsonplaceholder.typicode.com/todos');
    const cl=props.class+" notify"
    return(
        <div className={cl} id="notify">
            {
                listTodo.map((item)=>{
                    if(item.id<100)
                    return <NotifyItem key={item.id}>{item.title}</NotifyItem>
                }
                )
            }
        </div>
    )
}
export default Notify;