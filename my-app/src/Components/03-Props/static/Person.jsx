
const Person =(props)=>{

    const{name,userName,city,website}= props;
    return(
        <>
            <p>hello{name} i see your your name as{userName} and you are form {city}</p>
            <a href={website}>Link to my site</a>
        </>
    )


}

export default Person