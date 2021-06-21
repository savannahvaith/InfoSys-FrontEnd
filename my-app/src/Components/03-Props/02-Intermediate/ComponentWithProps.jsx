import ArrayItem from "./ArrayItem";

const ComponentWithProps = (props) => {
  const { numProp, stringProp, boolProp, functionProp, arrayProp, objProp } =
    props;

    const objArray =[];

    for(let [k,v] of Object.entries(objProp)){
        objArray.push(<p key={k}> {k} : {v} </p>)
    }

  return (
    <>
      <p>{numProp}</p>
      <p>{stringProp}</p>
      {/*  condition? true case : false case */}
      <p>{boolProp ? "Hey this is true" : "This is false sad face :("}</p>
      <p>Function says {functionProp()}</p>
      <p>{arrayProp.join(", ")}</p>

      <ul>
        {arrayProp.map((tempVal,i) => (
            // KEY IS VITAl 
          <ArrayItem key={i} item={tempVal} />
        ))}
      </ul>

      <p>{objArray}</p>
    </>
  );
};

export default ComponentWithProps;
