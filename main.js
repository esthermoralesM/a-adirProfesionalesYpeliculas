var prof = require("./Professional");
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var fs = require('fs');
var path = require('path');
var professional = new prof.Professional("Ana", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
var professional2 = new prof.Professional("Sara", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz");
var professional3 = new prof.Professional("Pedro", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actor");
var professional4 = new prof.Professional("Juan", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director");
var professional5 = new prof.Professional("Roberto", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director");
var professional6 = new prof.Professional("Marco", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "writer");
var professional7 = new prof.Professional("María", 68, "mujer", 60, 165, "castaño", "negro", "española", false, "española", 1, "writer");

var movie1 = new movie_1.Movie("Lo que el viento se llevó", 1990, "española", "drama", "español", "neftlif", true, "Ana", "Antonio",professional.name, professional4.name, professional7.name );
var movie2 = new movie_1.Movie("El mar", 1990, "española", "drama");
var movie3 = new movie_1.Movie("El oceano", 1990, "española", "drama");
var movie4 = new movie_1.Movie("El viento", 1990, "española", "drama");

var imbd = new imdb_1.Imdb([movie1]);
console.log("\n\nIMDB\n");

var aJson = JSON.stringify(imbd);
fs.writeFileSync("imdbBBDD.json", aJson);

var data = JSON.parse(fs.readFileSync('imdbBBDD.json'));
console.log(data);
imbd.escribirEnficheroJSON("ficheroJson.json");

console.log(imbd.obtenerInstanciaIMDB("ficheroJson.json"));

var preguntas = ["Title", "Release Year", "Nationality", "Language", "Plataform", "IsMCU", "Main character name", "Producer", "Distributor", "Genre"];
var respuestas = [];
function pregunta(i) {
    process.stdout.write("\n" + preguntas[i]);
    process.stdout.write(" > ");
}
process.stdin.on('data', function (data) {
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    }
    else {
        process.exit();
    }
});

process.on('exit', function () {
    var movie5 = new movie_1.Movie(respuestas[0], respuestas[1], respuestas[2], respuestas[9]);
   movie5.actor=professional2;
   movie5.director=professional7;
   movie5.escritor=professional4;
    movie5.language=respuestas[3];
    movie5.plataform=respuestas[4];
    movie5.isMCU=respuestas[5];
    movie5.mainCharacterName=respuestas[6];
    movie5.producer=respuestas[7];
    movie5.distributor=respuestas[8];
    imbd.peliculas.push(movie5);
    var aJson = JSON.stringify(imbd);
    console.log(aJson);
    console.log("aaaaaaaaaaaaa");
    fs.writeFileSync("imdbBBDD.json", aJson);
});
pregunta(0);
