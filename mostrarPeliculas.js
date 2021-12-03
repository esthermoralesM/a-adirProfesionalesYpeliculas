 var foto1="<img src='images/movie1.jpg' width=70px height=60px>";
 var foto2="<img src='images/movie2.jpg' width=70px height=60px>";
 var foto3="<img src='images/movie3.jpg' width=70px height=60px>";

 var professional = new Professional("Ana", 28, "mujer", 60, 165, "castaño", "verdes", "blanca", false, "española", 1, "actriz");
 var professional2 = new Professional("Alberto", 38, "hombre", 70, 175, "castaño", "verdes", "blanca", false, "española", 1, "actriz");
 var professional3 = new Professional("Rodrigo", 39, "hombre", 70, 175, "castaño", "verdes", "blanca", false, "española", 1, "actriz");
 var professional4 = new Professional("Juan", 28, "hombre", 80, 180, "moreno", "marrones", "blanca", false, "mexicana", 1, "director");
 var professional7 = new Professional("María", 68, "mujer", 60, 165, "rubio", "azules", "negra", false, "somalia", 1, "writer");


 var movie1 = new Movie("Lo que el viento se llevó", 1990, "española", "drama", "español", "neftlix", true, "Ana", "Juan", "Pedro", professional.name, professional4.name, professional7.name, foto1);
 var movie2 = new Movie("El mar", 2010, "española", "terror", "español", "HBO", true, "Alberto", "Laura", "Gema", professional2.name, professional4.name, professional7.name, foto2);
 var movie3 = new Movie("El oceano", 1999, "española", "drama",  "español", "orange TV", true, "Rodrigo", "Sandro", "Gema", professional3.name, professional4.name, professional7.name, foto3);

var arrayPeliculas=[movie1, movie2, movie3];

mostrarPeliculas();

function mostrarPeliculas(){

tbody=document.querySelector("table tbody");

tbody.innerHTML='';

for(var i=0;i<arrayPeliculas.length;i++){
    var row=tbody.insertRow(i),
     tituloCelda=row.insertCell(0),
     añoCelda=row.insertCell(1);
     nacionalidadCelda=row.insertCell(2);
     generoCelda=row.insertCell(3);
     idiomaCelda=row.insertCell(4);
     plataformaCelda=row.insertCell(5);
     esMCUCelda=row.insertCell(6);
     nombrePrincipalCelda=row.insertCell(7);
     productorCelda=row.insertCell(8);
     distribuidorCelda=row.insertCell(9);
     actorCelda=row.insertCell(10);
     escritorCelda=row.insertCell(11);
     directorCelda=row.insertCell(12);
     fotoCelda=row.insertCell(13);

    
     tituloCelda.innerHTML=arrayPeliculas[i].title
     añoCelda.innerHTML=arrayPeliculas[i].releaseYear
     nacionalidadCelda.innerHTML=arrayPeliculas[i].nationality
     generoCelda.innerHTML=arrayPeliculas[i].genre
     idiomaCelda.innerHTML=arrayPeliculas[i].language
     plataformaCelda.innerHTML=arrayPeliculas[i].plataform
     esMCUCelda.innerHTML=arrayPeliculas[i].isMCU
     nombrePrincipalCelda.innerHTML=arrayPeliculas[i].mainCharacterName
     productorCelda.innerHTML=arrayPeliculas[i].producer
     distribuidorCelda.innerHTML=arrayPeliculas[i].distributor
     actorCelda.innerHTML=arrayPeliculas[i].actor
     escritorCelda.innerHTML=arrayPeliculas[i].escritor
     directorCelda.innerHTML=arrayPeliculas[i].director
    fotoCelda.innerHTML=arrayPeliculas[i].foto
   
}
tbody.appendChild(row);

}

function añadirPelicula(){

    let pelicula=new Movie(
        document.getElementById("titulo").value,
        document.getElementById("año").value,
        document.getElementById("nacionalidad").value,
        document.getElementById("genero").value,
        document.getElementById("idioma").value,
        document.getElementById("plataforma").value,
        document.getElementById("isMCU").value,
        document.getElementById("protagonista").value,
        document.getElementById("productor").value,
        document.getElementById("distribuidor").value,
        document.getElementById("actor").value,
        document.getElementById("escritor").value,
        document.getElementById("director").value,
        document.getElementById("foto").value)

        arrayPeliculas.push(pelicula);
        mostrarPeliculas();
}