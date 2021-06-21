// const headers = {
//     'Access-Control-Allow-Origin': '*'
// };

// axios.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',headers)
// .then((response)=>{
//     // response gives an object back
//     console.log( response);
//     // console.log("Status from obj ",response.status);
//     // console.log(response.data);
// })
// .catch((err)=>{
//     console.error(err);
// })

const myDiv = document.querySelector("#records");

const getRecords = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      // response gives an object back
      // console.log( response.data.results);
      const data = response.data.results;
      console.log(data);

      data.map((singleRecord, index) => {
        printRecord(index, singleRecord);
      });
      for (let singleRecord of data) {
        printRecord(singleRecord);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const printRecord = (index, record) => {
  console.log(index, record);
  const p = document.createElement("p");
  const text = document.createTextNode(
    `my name is ${record.name} and the url is ${record.url}`
  );
  p.appendChild(text);

  const buttonLink = document.createElement("a");
  buttonLink.href = record.url;
  const buttonText = document.createTextNode("click me to find out more");
  buttonLink.appendChild(buttonText);
  //! but now - i need to appen to the page!
  p.appendChild(buttonLink);
  myDiv.appendChild(p);
};

const getRid = () => {
  console.log("be gone");
  myDiv.innerHTML = "";
};
const getVal = (e) => {
  // e.preventDefault();
  // console.log(e);
  const firstname = document.querySelector("form #fname").value;
  const pass = document.querySelector("form #pass").value;
  console.log(firstname, pass);
};

document
  .querySelector("form.subform")
  .addEventListener("submit", function (stop) {
    stop.preventDefault();
    let formElement = document.querySelector("form.subform").elements;
    let firstName = formElement["fname"].value;
    let password = formElement["pass"].value;
    console.log(firstName, password);
  });
