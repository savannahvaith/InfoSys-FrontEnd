let divToAppend = document.querySelector("#animals");

axios
  .get("http://localhost:9092/animal/read")
  .then((response) => {
    console.log(response.data);
    let data = response.data;
    data.map((singleRecord)=>{
        printToScreen(singleRecord)
    })
  })
  .catch((err) => {
    console.error(err);
  });

const printToScreen = (data) => {
    const {id,name,age,type}=data;
    //create a the div
    let myDiv = document.createElement("div");
    myDiv.className="alert alert-danger";
    //create the paragraph
    let myPara = document.createElement("p");
    //create the text for the paragraph
    let myText = document.createTextNode(`My Name is ${name} i am ${age} years old and i am a ${type}`)

    // update button
    let myUpdateBtn = document.createElement("a");
    myUpdateBtn.className="btn btn-warning"
    myUpdateBtn.innerText ="Update"
    myUpdateBtn.href=`singleRecord.html?id=${id}`
    // delete button
    let myDeleteBtn = document.createElement("button");
    myDeleteBtn.className="btn btn-danger"
    myDeleteBtn.innerText ="delete"
    myDeleteBtn.onclick = ()=>{
        deleteRecord(id); return false;
    }

    myPara.appendChild(myText);
    myDiv.appendChild(myPara)
    myDiv.appendChild(myUpdateBtn);
    myDiv.appendChild(myDeleteBtn);
    divToAppend.appendChild(myDiv);

};

const deleteRecord = (id) => {
    axios.delete(`http://localhost:9092/animal/delete/${id}`)
    .then((response)=>{
        console.log("Done=> response", response);
        setTimeout(() => {
            location.reload();
          }, 2000);
    })
    .catch((err)=>{
        console.error(err);
    })

}

document.querySelector("form#newAnimal").addEventListener("submit", (stop) => {
  stop.preventDefault();
  let formElements = document.querySelector("form#newAnimal").elements;
  console.log(formElements);
  let animalName = formElements["animalName"].value;
  let animalType = formElements["selectType"].value;
  let animalAge = formElements["ageInput"].value;

  postNewAnimal(animalName, animalType, animalAge);
});

const postNewAnimal = (animalName, animalType, animalAge) => {
  const dataToPost = {
    name: animalName,
    type: animalType,
    age: animalAge,
  };

  axios
    .post("http://localhost:9092/animal/create", dataToPost)
    .then((response) => {
      console.log(response);
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
    .catch((err) => {
      console.error(err);
    });
};
