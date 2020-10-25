import React,{useEffect, useState} from "react";
const NewComponent=()=>{
    const [name, setName] = useState("USAID");
    const [sample, setSample] = useState("SAMPLE");
    useEffect(()=>{
        console.log("THERE IS SOME CHANGE HAPPENING!");
    },[sample])
    const nameHandler=(e)=>{
        setName(e.target.value);
    }
    return(
        <div>
            <h1>HELLO FROM THIS NEW COMPONENT!</h1>
            <h3>{name}</h3>
            <input type="text" placeholder="Enter name" onChange={nameHandler} value={name} defaultValue=''/>
            <button onClick={(e)=>{
                e.preventDefault();
                console.log("BUTTON HAS BEEN CLICKED")
                }}>CLICK ME FOR MAGIC!</button>
        </div>
    )
}

export default NewComponent;