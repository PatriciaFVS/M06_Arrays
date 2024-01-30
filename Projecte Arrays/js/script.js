			
// POKEMONS
let dades;
let nomsPokemon=[];
let nomMunicipi=[];
let nomMeteorits=[];
let nomPelicules=[];
let orden = 'asc';


document.addEventListener("DOMContentLoaded", function () {
    mostrarDades();
	printList();
});


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
					let pok= (x<nomsPokemon.length?nomsPokemon[x].name:"-");
					let mun= (x<nomMunicipi.length?nomMunicipi[x].municipi_nom:"-");
					let met= (x<nomMeteorits.length?nomMeteorits[x].name:"-");
					let mov= (x<nomPelicules.length?nomPelicules[x].title:"-");

					let fila={'Pokemons': pok , 'Municipis': mun, 'Meterorits':met, 'Pelicules': mov};

					tot.push(fila);
				}
				console.table(tot);
			});
		});
	});
});

}

function reset(){
	location.reload();
}




function searchList(){

}
function calcMitjana(){

}

function printList(){
	
	fetch("js/data/pokemon.json")
	.then((response) => response.json())
	.then((data) => {
	//let nomsPokemon = data.pokemon;
	

	let taulapokemon= document.getElementById("taula");
	taulapokemon.innerHTML='';
	let tabla= document.createElement("table");
	tabla.setAttribute("border","2")
	let tbody= document.createElement("tbody");

	let cabezera=document.createElement("tr");

	let idcabezera=document.createElement("th");
	idcabezera.textContent="id";

	let imgcabezera=document.createElement("th");
	imgcabezera.textContent="Imatge";

	let nomcabezera=document.createElement("th");
	nomcabezera.textContent="Nom";

	let pescabezera=document.createElement("th");
	pescabezera.textContent="Pes";

	cabezera.appendChild(idcabezera);
	cabezera.appendChild(imgcabezera);
	cabezera.appendChild(nomcabezera);
	cabezera.appendChild(pescabezera);

	tbody.appendChild(cabezera);

	
	nomsPokemon.forEach(pokemon => {
		
		let fila= document.createElement("tr");

		let id= document.createElement("td");
        id.textContent=pokemon.id;
		
		let imatge= document.createElement("td");
		imatge.innerHTML= "<img src="+pokemon.img +">";
		
		let nom= document.createElement("td");
		
        nom.textContent = pokemon.name;
		
		let peso= document.createElement("td");
		peso.textContent= pokemon.weight;
		
		
		fila.appendChild(id);
		fila.appendChild(imatge);
		fila.appendChild(nom);
		fila.appendChild(peso);
		
		tbody.appendChild(fila);
	});
		
	tabla.appendChild(tbody);
	taulapokemon.appendChild(tabla);
     
})}

function ordenaLlista(ordre) {
    orden=ordre;

    nomsPokemon.sort((a, b) => (orden === 'asc') ? a.id - b.id : b.id - a.id);
    
    printList();
}