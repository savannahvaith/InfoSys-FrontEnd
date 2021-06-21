
import ComponentWithProps from "./ComponentWithProps";

const PropsWithDifferentTypes = ()=>{

    const myNum = 10;
    const myString = "Hello";
    const myBool = false;
    const myArray = ["Apples","Pears","Grapes","Oranges", "Banana", "Mango"];
    const myObject = {
        name:"batman",
        power:"Laser vision",
        car:"Bat Mobile",
        looks:["2 eyes","Nose","2 Ears"]
    };

    const myFunction = ()=>("Hey from the function");

    return(
        <ComponentWithProps
            numProp = {myNum}
            stringProp = {myString}
            boolProp = {myBool}
            arrayProp = {myArray}
            objProp = {myObject}
            functionProp = {myFunction} 

        />
    )


}
export default PropsWithDifferentTypes;