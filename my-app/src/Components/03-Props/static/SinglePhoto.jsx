
const SinglePhoto=(props)=>{
    console.log(props);
    const {albumId,title,url,thumbnailUrl} = props.item;

    return(
       <div className="col-4">
           <p>Album id : {albumId}</p>
           <p>{title}</p>
           <img src={url} width={300} height={300} alt="" />

       </div>
    )

}

export default SinglePhoto;
