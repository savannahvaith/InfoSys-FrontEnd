const param =()=>{

    const params = new URLSearchParams(window.location.search);
    // console.log(params.getAll("username"));
    for(let p of params){
        console.log(p[1]);
        // alert(p);
    }
}

param()

const showVal=(p)=>{
    alert(p);

}