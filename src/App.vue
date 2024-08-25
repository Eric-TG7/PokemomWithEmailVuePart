<template>
     <component :is="currentComponent" @end="ending" :counter="counter"  @updatecounter="updateCounter"/> 
    <!-- <EndingEmits />  -->
</template>

<script>

import PokemonPage from './pages/PokemonPage.vue'
import EndingEmits from './components/EndingEmits.vue';
export default {
  data(){
    return{
currentComponent: 'PokemonPage',
counter: 0
    }
  },
  components: {
    PokemonPage,
    EndingEmits
    
  },
  methods:{
ending(){
  this.currentComponent = 'EndingEmits'
},
updateCounter(newCounter){ // updating to the props counterin ending emits
  this.counter = newCounter;
}
  }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
