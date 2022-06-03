const teams = [
  {
    img: "./img/wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnet",
    role: "Founder & CEO",
  },
  {
    img: "./img/maria-medoro-chief-editor.jpg",
    name: "Maria Medoro",
    role: "Chief Editor",
  },
  {
    img: "./img/walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    role: "Office Manager",
  },
  {
    img: "./img/angela-proietti-social-media-manager.jpg",
    name: "Angela Proietti",
    role: "Social Media Manager",
  },
  {
    img: "./img/scott-estrada-developer.jpg",
    name: "Scott Estrada",
    role: "Developer",
  },
  {
    img: "./img/barbara-gabrielli-graphic-designer.jpg",
    name: "Barbara Gabrielli",
    role: "Graphic Designer",
  },
];


let container = document.querySelector(".container");
let inputNameInserted = document.getElementById("name__input");
let inputRoleInserted = document.getElementById("role__input");
let inputImageInserted = document.getElementById("image");


displayImage();


//TARGHETTIZZARE BTN
let addMemberBtn = document.querySelector(".add__btn");

//EVENTO CHE ESEGUE CODICE AL CLICK
addMemberBtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayImage();
  addNewObject(inputNameInserted, inputRoleInserted, inputImageInserted);
  
})


//FUNZIONE CHE CREA UN NUOVO OGGETTO
function addNewObject(name, role, img){
  //creazione oggetto
  let newObj = {
    name: name.value,
    role: role.value,
    img: img.value
  }
  teams.push(newObj);
}


//VISUALIZZARE IMG
function displayImage(){
  //SVUOTO IL CONTAINER PRIMA DI RIEMPIRLO
  container.innerHTML = "";
  //CICLARE ARRAY
  for(i = 0; i < teams.length; i++){
    //CONTENUTO HTML
    container.innerHTML += `
    <div class="img__box">
      <img src="${teams[i].img}" alt="img">
      <p class="name">${teams[i].name}</p>
      <p>${teams[i].role}</p>
    </div>
    `
}
}