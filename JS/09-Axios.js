const div = document.querySelector("#records");

axios
  .get("http://jsonplaceholder.typicode.com/posts/")
  .then((response) => {
    console.log(response.data);
    const data = response.data

    if (!Array.isArray(response.data) ) {
      printToScreen(response.data);
    } else {
      // for (let singleRecord of response.data) {
      //   printToScreen(singleRecord);
      // }
      data.map((item)=>{
        printToScreen(item)
      })
      
    }
  })
  .catch((err) => {
    console.error(err);
  });

const printToScreen = (record) => {
  const { id, body } = record;

  const content = document.createElement("div");
  content.id = id;
  content.className = "alert alert-primary";
  
  const buttonToRecord = document.createElement("a")
  buttonToRecord.innerHTML="View Record"
  buttonToRecord.href=`singleRecord.html?id=${id}`
  buttonToRecord.className="btn btn-danger";
  
  const text = document.createTextNode(`the id is: ${id} and the body of the record is ${body}`);
  content.appendChild(text);
  content.appendChild(buttonToRecord)
  div.appendChild(content);
};
