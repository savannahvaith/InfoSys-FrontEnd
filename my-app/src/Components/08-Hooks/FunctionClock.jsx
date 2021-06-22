import { useEffect, useState } from "react";


const FunctionClock =()=>{

    const [time,setTime] = useState(new Date().toLocaleTimeString());

    const [bool, setbool] = useState(false);

    const [count, setCount] = useState(0);

    const [moneyInBank,setMoneyInBank] =useState(0);
    console.log(time);

    useEffect(()=>{
        console.log("will update time");
            // setTimeout(tick,1000)

            document.title = `Clicked ${count} times`;
            // Replaces CWU
            setMoneyInBank(count)
            console.log("did update time");
            return(() => console.log(`Final: ${count}`));
        
    })

    //Blank keep firing
    // [] will fire once and only once
    //[<value>] - will only fire when there is a chance to that value

    const tick=()=>setTime(new Date().toLocaleTimeString());

    return(
        <>
        <h1>{time}</h1>
        <button onClick={()=>setbool(!bool)}>Click me</button>
        <br />        
        <br />     
        <p>{moneyInBank}</p>   
        <br />        
        <br />
        <p>You have clicked the button {count} times</p>
            <button onClick={()=>setCount(count=>count+1)}>
            Click Me!
            </button>
    </>
    )

}

export default FunctionClock;