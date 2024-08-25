import pokemonApi from "../api/pokemonApi"

const getPokemons =()=>{
const pokemonsArr= Array.from(Array(650)) // an array of 650 undefined elements for now
return pokemonsArr.map((_,index) =>index+1) // transforms this array into an array of numbers from 1 to 650 by using each index value plus 1.

}
const getPokemonOptions = async()=>{
    const mixedPokemons = getPokemons().sort(()=>Math.random()-0.5)// give a randomly array of pokemon to the array
    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4)) // getthe first 4 random pokemon
return pokemons
}
const getPokemonNames = async([a,b,c,d] =[])=>{

const promiseArr=[
    pokemonApi.get(`/${a}`),// wit pokemon api instance you call these url
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
]
const [p1,p2,p3,p4] = await Promise.all(promiseArr)// getting the info of thepokemons and put in names and id with the promise
return[
   { name: p1.data.name, id: p1.data.id},
   { name: p2.data.name, id: p2.data.id},
   { name: p3.data.name, id: p3.data.id},
   { name: p4.data.name, id: p4.data.id}
]
}

export default getPokemonOptions