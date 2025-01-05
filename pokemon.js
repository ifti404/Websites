console.clear();

async function fetchData(){

try{   //Error Handler

  const pokemonName =document.querySelector("#pokemonName").value.toLowerCase();

const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
 if(!response.ok){
  throw new Error(`Could not fetch data :( ${pokemonName}`);
 }
//  Creating Data
  const data = await response.json();
  console.log(data);
  // Pokemon Datas

//Images
  const pokemonSprite = data.sprites.front_default;
  const img = document.querySelector("#pokemonSprite");
  img.src = pokemonSprite;
  img.style.display = "block";

  //BIO
  
  const pokemonBio = document.querySelector(".pokemonBio");
pokemonBio.innerHTML = `
  <p>Name: ${data.name}</p>
  <p>Height: ${data.height}</p>
  <p>Weight: ${data.weight}</p> 
  `;

}
catch(error){
  console.error(error);
}
}