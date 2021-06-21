import Child from "./Child"

const Parent = ()=>{

    const myCar = "Audi";

    return(
        <>
            <h1>Hello from parent</h1>
                {/*  KEY: VALUE   */}
            <Child 
                name="Vinesh" 
                age={900} 
                location="London" 
                car={myCar}
            />
        </>
    )


}
export default Parent