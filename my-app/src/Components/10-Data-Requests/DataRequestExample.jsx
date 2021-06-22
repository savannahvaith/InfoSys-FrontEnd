import axios from "axios";
import { useEffect, useState } from "react";

const DataRequestExample = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setIsLoaded] = useState(false);
  //promise has three stages
  //Pending
  //success - TICK
  //failure - TICK

  useEffect(() => {
      setTimeout(()=>{

          axios
          .get(`http://jsonplaceholder.typicode.com/post`)
          .then((response) => {
              console.log(response);
              setIsLoaded(true);
              setData(response.data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
            });
        },3000)
        }, []);
        
  console.log(data);
  console.log(error);

  if (error) {
    return <h1>OHHH NOO SOMETHING WENT WRONG!!!!!!!!!{error.message}</h1>;
  } else if (!loaded) {
    return (
      <>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Get Data!</h1>
        <p>This is working</p>
      </>
    );
  }
};

export default DataRequestExample;
