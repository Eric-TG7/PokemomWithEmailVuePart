<template>
  <h1 v-if="!pokemon">Please Wait..</h1>
  <div class="answer-container" v-else>
    <h1>Who is this pokemon?</h1>
  <PokemonFoto :pokemonId="pokemon.id"  :showPokemon="showPokemon"/>
  <PokemonOptions     :class="{ untouchable: showAnswer }" :pokemons="pokemonArr"  @selection="checkAnswer"/>
  <div v-if="showAnswer" class="answer-container">
  <h2 >{{ message }}</h2>
  <button v-if="streak" @click="newgame"> new game</button>
</div>
</div>

</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonFoto from '@/components/PokemonFoto.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'
import axios from 'axios';
export default {
  props: ['counter'],
  components: {
    PokemonOptions,
    PokemonFoto,
  },
  data(){
return{
  pokemonArr: [],
  pokemon: null, // this is used aspokemon.id ,it will get the new index and put in pokemon foto v-bind as  pokemon id
showPokemon: false,
showAnswer: false,
message: '',
tcounter:0,
streak: true
}
  },
  methods:{
   async mixPokemonArray(){
this.pokemonArr = await getPokemonOptions()
const  rndindex = Math.floor(Math.random() * 4) // random indexes
this.pokemon = this.pokemonArr[rndindex]  // pokemon chosen from the randomindexes
    },
checkAnswer(pokemonId){
this.showPokemon = true
this.showAnswer = true
if(pokemonId == this.pokemon.id){
  this.tcounter++
  this.message = `you are right, it is , ${this.pokemon.name}`
}
else{
  if(this.tcounter>6){
    this.streak = false
  }
  this.message= " so .. close but wrong!"
}
this.endingevent(this.streak,this.tcounter)// take to take emit event
},
newgame(){
  this.pokemonArr= []
this.showPokemon= false
this.showAnswer= false
this.pokemon=null
this.mixPokemonArray()
},

endingevent(status, counter){
 
   if(status == false && counter >6){

    setTimeout(() => {
      this.$emit('updatecounter', this.tcounter);
this.$emit('end')
this.tcounter = 0;
   } ,1250)
  }
   else{
    return
   }
}

  },
  mounted(){
  this.mixPokemonArray()
  },
  

  



}
</script>

<style>
.untouchable{
  pointer-events: none;
}
</style>