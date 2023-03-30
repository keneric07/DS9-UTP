
const boton = document.getElementById("btn_buscar");
const inputName =  document.getElementById("nombre_pokemon");
const result = document.getElementById("result");
var namePok = "";

boton.addEventListener("click",(e)=>{
namePok = inputName.value.toLowerCase();
fetch("https://pokeapi.co/api/v2/pokemon/"+namePok)
.then((response) => response.json())
.then((data) => mostrarIdPokemon(data));

});

function mostrarIdPokemon(data){
   result.innerHTML="El id de "+namePok+" es : "+data.id;
}