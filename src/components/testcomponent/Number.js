import React,{useState} from "react";
import useCusMemo from "../hooks/useCusMemo";
function Number() {
    const [number,setNumber]=useState(0)
    const result=useCusMemo(2)
    const handlerAddNumber=()=>{
        return setNumber(number+1);
    }
    return(
        <div>
            <h1>{result}</h1>
            <button onClick={handlerAddNumber}>Nhấn</button>
            <h2>{number}</h2>
        </div>
    )
}
export default Number;