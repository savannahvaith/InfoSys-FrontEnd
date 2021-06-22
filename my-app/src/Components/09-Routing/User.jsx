import { useParams } from "react-router-dom";

const User = () => {
    
    const { id , name } = useParams();


    return( <p>The value from the URL is:{id} and the name is {name}</p> )

}

export default User; 