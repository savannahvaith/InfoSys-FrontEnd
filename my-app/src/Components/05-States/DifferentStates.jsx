import {useState} from 'react'

const DifferentStates = ()=>{

// ! [statefulValue, function to update the stateful value]
// ! useState- type of hook
// ! (default value)
    let [bool,setBool] = useState(false);
    console.log(bool);



    return(
        <>
            <p>Hey welcome to my page</p>
            {
                bool?<p>this is when its true</p>:<p>this is when its false</p>
            }
            <button onClick={()=>setBool(tempVal=>!tempVal)}>
                Change the value of bool
            </button>
        </>
    )

}

export default DifferentStates;