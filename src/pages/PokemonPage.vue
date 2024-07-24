<template>
  <h1>Quien es este pokemon?</h1>
  <PokemonFoto :pokemonId="45"  :showPokemon="false"/>
  <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
// number , required
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonFoto from '@/components/PokemonFoto.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
export default {
  name: 'App',
  components: {
    PokemonOptions,
    PokemonFoto
  },
  data(){
return{
  pokemonArr: []
}
  },
  methods:{
   async mixPokemonArray(){
this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted(){
  this.mixPokemonArray()
  }

}
</script>

<style></style>