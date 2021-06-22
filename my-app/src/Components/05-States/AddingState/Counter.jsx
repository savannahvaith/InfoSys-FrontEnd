import { useState } from "react";
import Child from "./Child";

const Counter = ()=>{

    let [count,setCount] = useState(0);

    const increment =()=>{
        count++;
        setCount(c=>c+1);
    }

    return(
        <>
        <h1>I am the parent and the current Val is {count}</h1>
        <Child count= {count}/>
        <button className="btn btn-success" onClick={increment}>++</button>
        <button className="btn btn-danger" onClick={()=>setCount(c=>c-1)}>--</button>
        </>
    )

}

export default Counter;