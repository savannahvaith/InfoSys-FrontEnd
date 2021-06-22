import list from '../Todo.json';
import Search from './Search';
import List from './List';
import { useState } from 'react';

const SearchList=()=>{

    const [search, setSearch] = useState("");
    const [completed,setCompleted] = useState(false);

    const queryHandler=(e)=>{
        setSearch(e.target.value)
    }
    const checkHandler=()=>{
        setCompleted(!completed);
    }

    return(
        <>
            <h1>Welcome to  my basic to-do app</h1>
            <br />
            <Search 
                query={search} 
                queryFunction={queryHandler}
                checked={completed}
                checkHandler={checkHandler}
                

            />
            <List data={list} query={search} completed={completed} />
        </>
    )

}

export default SearchList;