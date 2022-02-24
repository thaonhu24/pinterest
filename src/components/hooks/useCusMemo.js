import {useState, useMemo} from "react";
function useCusMemo(num){
    const result = useMemo(
        ()=>num+1
        ,[num]
    )
    return result;
}
export default useCusMemo;