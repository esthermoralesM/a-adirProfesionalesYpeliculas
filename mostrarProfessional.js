var foto1="<img src='images/profesional1.jpg' width=70px height=60px>";
var foto2="<img src='images/profesional2.jpg' width=70px height=60px>";
var foto3="<img src='images/profesional3.jpg' width=70px height=60px>";
var foto4="<img src='images/profesional4.jpg' width=70px height=60px>";
var foto5="<img src='images/profesional5.jpg' width=70px height=60px>";
var foto6="<img src='images/profesional6.jpg' width=70px height=60px>";
var foto7="<img src='images/profesional7.jpg' width=70px height=60px>";

var professional = new Professional("Ana", 28, "mujer", 60, 165, "moreno", "azúl", "blanca", false, "española", 2, "actriz",foto1);
var professional2 = new Professional("Sara", 34, "mujer", 60, 165, "rubia", "azúl", "blanca", false, "mexicana", 3, "actriz", foto2);
var professional3 = new Professional("Pedro", 18, "hombre", 60, 165, "moreno", "marrones", "blanco", false, "española", 3, "actor", foto3);
var professional4 = new Professional("Juan", 28, "mujer", 60, 165, "castaño", "azúl", "blanco", false, "americana", 1, "director", foto4);
var professional5 = new Professional("Roberto", 34, "mujer", 60, 165, "moreno", "marrones", "blanco", false, "americana", 1, "director", foto5);
var professional6 = new Professional("Marco", 18, "hombre", 60, 165, "castaño", "azúl", "blanco", false, "británica", 2, "writer", foto6);
var professional7 = new Professional("María", 68, "mujer", 60, 165, "rubia", "marrones", "blanca", false, "americana", 3, "writer", foto7);

var arrayProfesionales=[professional, professional2, professional3, professional4, professional5, professional6, professional7];

mostrarProfesionales();


function mostrarProfesionales(){

tbody=document.querySelector("table tbody");

tbody.innerHTML='';

for(var i=0;i<arrayProfesionales.length;i++){
    var row=tbody.insertRow(i),
     nombreCelda=row.insertCell(0),
     edadCelda=row.insertCell(1);
     generoCelda=row.insertCell(2);
     pesoCelda=row.insertCell(3);
     alturaCelda=row.insertCell(4);
     colorPeloCelda=row.insertCell(5);
     colorOjosCelda=row.insertCell(6);
     razaCelda=row.insertCell(7);
     estaRetiradoCelda=row.insertCell(8);
     nacionalidadCelda=row.insertCell(9);
     numOscarCelda=row.insertCell(10);
     profesionCelda=row.insertCell(11);
     fotoCelda=row.insertCell(12);

    
    nombreCelda.innerHTML=arrayProfesionales[i].name
    edadCelda.innerHTML=arrayProfesionales[i].age
    generoCelda.innerHTML=arrayProfesionales[i].genre
    pesoCelda.innerHTML=arrayProfesionales[i].weight
    alturaCelda.innerHTML=arrayProfesionales[i].height
    colorPeloCelda.innerHTML=arrayProfesionales[i].hairColor
    colorOjosCelda.innerHTML=arrayProfesionales[i].eyeColor
    razaCelda.innerHTML=arrayProfesionales[i].race
    estaRetiradoCelda.innerHTML=arrayProfesionales[i].isRetired
    nacionalidadCelda.innerHTML=arrayProfesionales[i].nationality
    numOscarCelda.innerHTML=arrayProfesionales[i].oscarNumbers 
    profesionCelda.innerHTML=arrayProfesionales[i].profession
    fotoCelda.innerHTML=arrayProfesionales[i].foto 
}

tbody.appendChild(row);}


function añadirProfesional(){

    let profesional=new Professional(
    document.getElementById("nombre").value,
    document.getElementById("edad").value,
    document.getElementById("genero").value,
    document.getElementById("peso").value,
    document.getElementById("altura").value,
    document.getElementById("colorCabello").value,
    document.getElementById("colorOjos").value,
    document.getElementById("raza").value,
    document.getElementById("estaRetirado").value,
    document.getElementById("nacionalidad").value,
    document.getElementById("numOscar").value,
    document.getElementById("profesion").value,
    document.getElementById("foto").value)

    arrayProfesionales.push(profesional);
    mostrarProfesionales();   
}