"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printPeliculas = function () {
        var resultado = "";
        for (var i = 0; i < this.peliculas.length; i++) {
            var numero = 1 + i;
            resultado += "Pelicula numero: " + numero + "\n" + this.peliculas[i].printAll() + "\n";
        }
        return resultado;
    };
    Imdb.prototype.escribirEnficheroJSON = function (nombreFichero) {
        var aJson = JSON.stringify(this.peliculas);
        fs.writeFileSync(nombreFichero, aJson);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var data = JSON.parse(fs.readFileSync(nombreFichero));
        return data;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
