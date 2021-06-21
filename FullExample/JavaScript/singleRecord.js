
const param = new URLSearchParams(window.location.search)
const id = param.get("id")
console.log(id);

axios
  .get(`http://localhost:9092/animal/read/${id}`)
  .then((response) => {
    console.log(response.data);
    let data = response.data;

    document.querySelector("#animalID").value= data.id;
    document.querySelector("#animalName").value= data.name;
    document.querySelector("#selectType").value= data.type;
    document.querySelector("#ageInput").value= data.age;

  })
  .catch((err) => {
    console.error(err);
  });

document.querySelector("form#updateAnimal").addEventListener("submit", (stop) => {
    stop.preventDefault();
    let formElements = document.querySelector("form#updateAnimal").elements;
    console.log(formElements);
    

    let animalName = formElements["animalName"].value;
    let animalType = formElements["selectType"].value;
    let animalAge = formElements["ageInput"].value;
  
    dataToUpdate(animalName,animalType,animalAge)
   
  });

  const dataToUpdate=(animalName,animalType,animalAge)=>{

    const dataToSend = 
        {
            id:id,
            name: animalName,
            type: animalType,
            age: animalAge,
          };
    
    axios
    .put(`http://localhost:9092/animal/update/${id}`, dataToSend)
    .then((response) => {
      console.log(response);
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    })
    .catch((err) => {
      console.error(err);
    });
  }