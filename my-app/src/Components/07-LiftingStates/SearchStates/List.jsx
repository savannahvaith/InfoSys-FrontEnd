

const List =({data,query,completed})=>{
    // console.log("List",query,completed);
    // const date = new Date()
    // console.log(date.toTimeString());

    const filterQuery =()=>(data)=>data.title.includes(query.toLowerCase());
    const checkCompleted = () =>(data)=> data.completed ===completed;
    /**
     *! const filterQuery =()=>{
     *!     return (data)=>{
     *!     list.title.includes(query.toLowerCase());
     *!     }
     *! }
     */
     const hello = ()=> "hello";


        console.log(hello());
    //  console.log(filterQuery)

     let filteredList
     if(completed===true){
          filteredList = data.filter(filterQuery(query)).filter(checkCompleted(completed));
     }else{
         filteredList = data.filter(filterQuery(query))
     }
    console.log(filteredList);

    let myArray=[]
     data.map((tempElement)=>{
        if(tempElement.title.includes(query)&& tempElement.completed === completed){
            myArray.push(tempElement);
        }
     })

    return(
        <>
        <br />
        <br />
        <br />
        <h3>To-dosss</h3>
        {
        // myArray.map((tempVal)=>(
        filteredList.map((tempVal)=>(
            <div key={tempVal.id}>
                <h5>{tempVal.title}</h5>
                <input type="checkbox" checked={tempVal.completed}name="" readOnly id="" />
            </div>
        ))
        }
        </>
    )
    
}

export default List