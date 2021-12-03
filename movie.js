 class Movie{
   constructor (title, releaseYear, nationality, genre, languaje, plataform, isMCU, mainCharacterName, producer, distributor, actor, escritor, director,  foto) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.language=languaje;
        this.plataform=plataform;
        this.isMCU=isMCU;
        this.mainCharacterName=mainCharacterName;
        this.producer=producer;
        this.distributor=distributor;
        this.actor=actor;
        this.escritor=escritor;
        this.director=director;
        this.foto=foto;
    }
}

    function printAll() {
        return "Title - " + this.title + "\n" +
            "Release Year - " + this.releaseYear + "\n" +
            "Actors - " + this.actors + "\n" +
            "Nationality - " + this.nationality + "\n" +
            "Director - " + this.director + "\n" +
            "Writer - " + this.writer + "\n" +
            "Language - " + this.language + "\n" +
            "Plataform - " + this.plataform + "\n" +
            "isMCU - " + this.isMCU + "\n" +
            "Main Character - " + this.mainCharacterName + "\n" +
            "Producer - " + this.producer + "\n" +
            "Distributor - " + this.distributor + "\n" +
            "Genre - " + this.genre;
    };

module.exports.Movie=Movie;
