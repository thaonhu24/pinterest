import React, { useState, useEffect } from 'react';
function Clock() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(
        () => {
        console.log("setTime is called");
    let setTime = () => {
        setCurrentDateTime(new Date());
    }
    let interval = setInterval(setTime, 1000);

    return () => {
        clearInterval(interval);
    }
    },[]);
    return (
    <div><p>The current time is {currentDateTime.toString()}</p></div>
    );
    }
export default Clock;
