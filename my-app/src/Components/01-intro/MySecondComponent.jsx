

const MySecondComponent = ()=>{

    const name = `Vinesh Ghela`;
    const date = new Date();
    const location = `London`;
    const myCar =`Audi`;

    return(
        //Fragment?
        <>
            <h3>Welcome to my bio!</h3>
            <p>{name}</p>
            <p>Todays date and time is {date.toLocaleDateString()},{date.toLocaleTimeString()}</p>
            <p>{location}</p>
            <p>{`my name is ${name} and i drive a ${myCar}`}</p>
        </>
    )

}

export default MySecondComponent