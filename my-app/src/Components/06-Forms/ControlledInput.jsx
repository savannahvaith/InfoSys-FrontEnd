import { useState } from "react";


const ControlledInput = () => {
  
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [age,setAge] = useState();
  
    const handleForm = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
    e.preventDefault();
    const dataToSend = {
        "userName":userName,
        "password":password,
        "age":{age}
    }
    console.log(dataToSend);
    setUserName("");
    setPassword("");
    setAge(18);


  };

  return (
      <>
    <form onSubmit={handleForm}>
      <label>Name</label>
      <input 
        id="name"
        name="name" 
        type="text" 
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input 
        id="pass" 
        name="pass" 
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <br />
      <label>Age</label>
      <input 
        id="pass" 
        name="pass" 
        type="number"
        min={18}
        max={110}
        value={age}
        onChange={(e)=>setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    <h1>Welcome {userName}</h1>
    <h1>This should not be seen :({password}</h1>
    </>


  );
};

export default ControlledInput;
