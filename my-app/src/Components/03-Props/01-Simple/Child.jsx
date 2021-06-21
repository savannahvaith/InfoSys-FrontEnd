
const Child = (props)=>{

    const {name,location, age,car} = props;
 
    console.log(props);

    return(
        <>
        <h2>Hello from child</h2>
        <p>{name}</p>
        <p>{location}</p>
        <p>{age}</p>
        <p>{car}</p>
        </>
    )

}
export default Child;