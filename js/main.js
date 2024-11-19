
let simulatorBtn = document.querySelector("#simuladorBtn");


const inversion = () => {
let campoNombre = document.querySelector("#nombres").value;
let campoTelefono = document.querySelector("#telefono").value;
let campoEmail = document.querySelector("#email").value;
let campoInversion= parseFloat(document.querySelector("#inversion").value);
let campoTiempo = parseInt(document.querySelector("#tiempo").value);

let conPost = document.querySelector("#post");
let conPre = document.querySelector("#pre");

let meses = document.querySelector("#tiempo-show");
let intereses = document.querySelector("#interes-show");

let ganacia = document.querySelector("#ganancia-show");
let total = document.querySelector("#total-show");

let nombresUsuario = document.querySelector("#nombres-show");
let correoUsuario = document.querySelector("#email-show");

conPost.classList.remove("disabled");
conPre.classList.add("disabled");

console.log(campoNombre);
console.log(campoTelefono);
console.log(campoEmail);
console.log(campoInversion);
console.log(typeof campoInversion);
console.log(campoTiempo);
console.log(typeof campoTiempo);

let aniosMeses;
let interes;

switch (campoTiempo) {
    case 1:
        console.log("0.8%")
        aniosMeses = campoTiempo * 12;
        interes = 0.008;
        meses.textContent = `${aniosMeses} Meses`;
        intereses.textContent = "0.8%";
        break;
    case 2:
        console.log("1.3%")
        aniosMeses = campoTiempo * 12;
        interes = 0.013;
        meses.textContent = `${aniosMeses} Meses`;
        intereses.textContent = "0.8%";
        break;
    case 3:
        console.log("1.7%")
        aniosMeses = campoTiempo * 12;
        interes = 0.017;
        meses.textContent = `${aniosMeses} Meses`;
        intereses.textContent = "0.8%";
        break;
    default:
        console.log("Default");
        break;
}

const ganaciaP = campoInversion * interes * aniosMeses;
ganacia.textContent = ganaciaP;
const totalP = campoInversion + ganaciaP;
total.textContent = totalP;
    
nombresUsuario.textContent = campoNombre;
correoUsuario.textContent = campoEmail;
    
}



simulatorBtn.addEventListener("click",inversion)