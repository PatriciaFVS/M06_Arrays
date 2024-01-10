			
// POKEMONS

let dades;
let nomsPokemon=[];
let nomMunicipi=[];
let nomMeteorits=[];
let nomPelicules=[];

function mostrarDades(){

// POKEMONS
fetch("js/data/pokemon.json")
.then((response) => response.json())
.then((data) => {
	nomsPokemon = data.pokemon;


	// MUNICIPIS
	fetch("js/data/municipis.json")
	.then((response) => response.json())
	.then((data) => {
		nomMunicipi = data.elements;		

		// METEORITS
		fetch("js/data/earthMeteorites.json")
		.then((response) => response.json())
		.then((data) => {
			nomMeteorits = data;		

			// MOVIES
			fetch("js/data/movies.json")
			.then((response) => response.json())
			.then((data) => {
				nomPelicules = data.movies;
				let tot=[];		
				for(let x=0;x<1000;x++){
					let pok= x<nomsPokemon.length?nomsPokemon[x].name:"-";
					let mun= x<nomMunicipi.length?nomMunicipi[x].municipi_nom:"-";
					let met= x<nomMeteorits.length?nomMeteorits[x].title:"-";
					let mov= x<nomPelicules.length?nomPelicules[x].name:"-";

					let fila=('Pokemons': pok , 'Municipis')
				}
			});
		});
	});
});

}
 








function reset(){
	location.reload();
}

function ordenaLlista(ordre){

}