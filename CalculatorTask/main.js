const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");
const result = document.querySelector("#result");
const history = document.querySelector("#history");

// KISS
//! Keep
//! It
//! Simple
//! Stupid

// DRY
//? Dont
//? Repeat
//? your self!


const getValues = () => {
    return [Number.parseFloat(num1.value),Number.parseFloat(num2.value)];
}
const printValues =(newValue) =>{
    result.value = newValue;
}

const clearValues = ()=>{
    num1.value="";
    num2.value = "";
    result.value="";
}
const clearHistory=()=>{
    history.innerHTML="";
}

const addToHistory =(num1,operator,num2, result, color)=>{
    const createDiv = document.createElement("div");
    createDiv.className=`alert alert-${color}`;
    const info = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    createDiv.appendChild(info);
    history.appendChild(createDiv);

}

const add = () =>{
    const [num1, num2] = getValues();
    const result = num1+num2;
    printValues(result);
    addToHistory( num1,"+",num2,result,"primary");
    
}
const subtract = () =>{
    const [num1, num2] = getValues();
    const result = num1-num2;
    printValues(result);
    addToHistory( num1,"-",num2,result,"danger");
    
}
const multiply = () =>{
    const [num1, num2] = getValues();
    const result = num1*num2;
    printValues(result);
    addToHistory( num1,"*",num2,result,"warning");
    
}
const divide = () =>{
    const [num1, num2] = getValues();
    const result = num1 / num2;
    printValues(result);
    addToHistory( num1,"/",num2,result,"success");

}